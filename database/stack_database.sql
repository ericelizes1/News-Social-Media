DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  user_id BIGSERIAL,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  nickname VARCHAR(255) NOT NULL,
  birthdate DATE NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  phone TEXT UNIQUE,
  pronouns VARCHAR(255),
  bio TEXT,
  website TEXT,
  profile_img_url TEXT,
  background_img_url TEXT,
  created_on TIMESTAMP NOT NULL,
  PRIMARY KEY (user_id)
);

DROP TABLE IF EXISTS source CASCADE;
CREATE TABLE source (
  source_id SERIAL,
  name TEXT NOT NULL,
  logo_url TEXT NOT NULL,
  PRIMARY KEY (source_id)
);

DROP TABLE IF EXISTS article CASCADE;
CREATE TABLE article (
  article_id BIGSERIAL,
  source_id INT NOT NULL,
  url TEXT NOT NULL,
  title TEXT NOT NULL,
  text TEXT NOT NULL,
  author TEXT,
  date DATE,
  cover_img TEXT,
  PRIMARY KEY (article_id),
  CONSTRAINT fk_source FOREIGN KEY(source_id) REFERENCES source(source_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS post CASCADE;
CREATE TABLE post (
  post_id BIGSERIAL,
  user_id BIGINT NOT NULL,
  media_type TEXT NOT NULL,
  text TEXT,
  media_photo_url TEXT,
  media_video_url TEXT,
  media_stack_id BIGINT,
  media_comment_id BIGINT,
  media_post_id BIGINT,
  media_article_id BIGINT,
  created_on TIMESTAMP NOT NULL,
  PRIMARY KEY (post_id)
);

DROP TABLE IF EXISTS comment CASCADE;
CREATE TABLE comment (
  comment_id BIGSERIAL,
  user_id BIGINT NOT NULL,
  parent_post_id BIGINT,
  parent_comment_id BIGINT,
  text TEXT NOT NULL,
  created_on TIMESTAMP NOT NULL,
  PRIMARY KEY (comment_id),
  CONSTRAINT fk_users FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_post_id FOREIGN KEY(parent_post_id) REFERENCES post(post_id) ON DELETE SET NULL,
  CONSTRAINT fk_comment_id FOREIGN KEY(parent_comment_id) REFERENCES comment(comment_id) ON DELETE SET NULL
);

DROP TABLE IF EXISTS stack CASCADE;
CREATE TABLE stack (
  stack_id BIGSERIAL,
  user_id BIGINT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  img_url TEXT,
  created_on TIMESTAMP NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  PRIMARY KEY (stack_id),
  CONSTRAINT fk_users FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS stack_card CASCADE;
CREATE TABLE stack_card (
  stack_card_id BIGSERIAL,
  stack_id BIGINT NOT NULL,
  category TEXT NOT NULL,
  media_article_id BIGINT,
  media_post_id BIGINT,
  media_comment_id BIGINT,
  PRIMARY KEY (stack_card_id),
  CONSTRAINT fk_stack_id FOREIGN KEY(stack_id) REFERENCES stack(stack_id) ON DELETE CASCADE,
  CONSTRAINT fk_article_id FOREIGN KEY(media_article_id) REFERENCES article(article_id) ON DELETE SET NULL,
  CONSTRAINT fk_post_id FOREIGN KEY(media_post_id) REFERENCES post(post_id) ON DELETE SET NULL,
  CONSTRAINT fk_comment_id FOREIGN KEY(media_comment_id) REFERENCES comment(comment_id) ON DELETE SET NULL
);


ALTER TABLE ONLY post ADD CONSTRAINT fk_users FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE;
ALTER TABLE ONLY post ADD CONSTRAINT fk_stack_id FOREIGN KEY(media_stack_id) REFERENCES stack(stack_id) ON DELETE SET NULL;
ALTER TABLE ONLY post ADD CONSTRAINT fk_comment_id FOREIGN KEY(media_comment_id) REFERENCES comment(comment_id) ON DELETE SET NULL;
ALTER TABLE ONLY post ADD CONSTRAINT fk_post_id FOREIGN KEY(media_post_id) REFERENCES post(post_id) ON DELETE SET NULL;
ALTER TABLE ONLY post ADD CONSTRAINT fk_article_id FOREIGN KEY(media_article_id) REFERENCES article(article_id) ON DELETE SET NULL;


DROP TABLE IF EXISTS user_like_post CASCADE;
CREATE TABLE user_like_post (
  user_id BIGINT,
  post_id BIGINT,
  PRIMARY KEY (user_id, post_id),
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_post_id FOREIGN KEY(post_id) REFERENCES post(post_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS user_report_post CASCADE;
CREATE TABLE user_report_post (
  user_id BIGINT,
  post_id BIGINT,
  PRIMARY KEY (user_id, post_id),
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_post_id FOREIGN KEY(post_id) REFERENCES post(post_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS user_block_post CASCADE;
CREATE TABLE user_block_post (
  user_id BIGINT,
  post_id BIGINT,
  PRIMARY KEY (user_id, post_id),
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_post_id FOREIGN KEY(post_id) REFERENCES post(post_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS user_follow_user CASCADE;
CREATE TABLE user_follow_user (
  followed_user_id BIGINT,
  following_user_id BIGINT,
  PRIMARY KEY (followed_user_id, following_user_id),
  CONSTRAINT fk_followed_user_id FOREIGN KEY(followed_user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_following_user_id FOREIGN KEY(following_user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT enforce_different_users CHECK (followed_user_id <> following_user_id)
);

DROP TABLE IF EXISTS user_report_user CASCADE;
CREATE TABLE user_report_user (
  reported_user_id BIGINT,
  reporting_user_id BIGINT,
  PRIMARY KEY (reported_user_id, reporting_user_id),
  CONSTRAINT fk_reported_user_id FOREIGN KEY(reported_user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_reporting_user_id FOREIGN KEY(reporting_user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT enforce_different_users CHECK (reported_user_id <> reporting_user_id)
);

DROP TABLE IF EXISTS user_block_user CASCADE;
CREATE TABLE user_block_user (
  blocked_user_id BIGINT,
  blocking_user_id BIGINT,
  PRIMARY KEY (blocked_user_id, blocking_user_id),
  CONSTRAINT fk_blocked_user_id FOREIGN KEY(blocked_user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_blocking_user_id FOREIGN KEY(blocking_user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT enforce_different_users CHECK (blocked_user_id <> blocking_user_id)
);

DROP TABLE IF EXISTS user_subscribe_stack CASCADE;
CREATE TABLE user_subscribe_stack (
  user_id BIGINT,
  stack_id BIGINT,
  PRIMARY KEY (user_id, stack_id),
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_stack_id FOREIGN KEY(stack_id) REFERENCES stack(stack_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS user_report_stack CASCADE;
CREATE TABLE user_report_stack (
  user_id BIGINT,
  stack_id BIGINT,
  PRIMARY KEY (user_id, stack_id),
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_stack_id FOREIGN KEY(stack_id) REFERENCES stack(stack_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS user_block_stack CASCADE;
CREATE TABLE user_block_stack (
  user_id BIGINT,
  stack_id BIGINT,
  PRIMARY KEY (user_id, stack_id),
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_stack_id FOREIGN KEY(stack_id) REFERENCES stack(stack_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS user_like_comment CASCADE;
CREATE TABLE user_like_comment (
  user_id BIGINT,
  comment_id BIGINT,
  PRIMARY KEY (user_id, comment_id),
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_comment_id FOREIGN KEY(comment_id) REFERENCES comment(comment_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS user_report_comment CASCADE;
CREATE TABLE user_report_comment (
  user_id BIGINT,
  comment_id BIGINT,
  PRIMARY KEY (user_id, comment_id),
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_comment_id FOREIGN KEY(comment_id) REFERENCES comment(comment_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS user_block_comment CASCADE;
CREATE TABLE user_block_comment (
  user_id BIGINT,
  comment_id BIGINT,
  PRIMARY KEY (user_id, comment_id),
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_comment_id FOREIGN KEY(comment_id) REFERENCES comment(comment_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS user_like_article CASCADE;
CREATE TABLE user_like_article (
  user_id BIGINT,
  article_id BIGINT,
  PRIMARY KEY (user_id, article_id),
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_article_id FOREIGN KEY(article_id) REFERENCES article(article_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS user_bookmark_article CASCADE;
CREATE TABLE user_bookmark_article (
  user_id BIGINT,
  article_id BIGINT,
  PRIMARY KEY (user_id, article_id),
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_article_id FOREIGN KEY(article_id) REFERENCES article(article_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS user_report_article CASCADE;
CREATE TABLE user_report_article (
  user_id BIGINT,
  article_id BIGINT,
  PRIMARY KEY (user_id, article_id),
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_article_id FOREIGN KEY(article_id) REFERENCES article(article_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS user_block_article CASCADE;
CREATE TABLE user_block_article (
  user_id BIGINT,
  article_id BIGINT,
  PRIMARY KEY (user_id, article_id),
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_article_id FOREIGN KEY(article_id) REFERENCES article(article_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS user_like_stack_card CASCADE;
CREATE TABLE user_like_stack_card (
  user_id BIGINT,
  stack_card_id BIGINT,
  PRIMARY KEY (user_id, stack_card_id),
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_stack_card_id FOREIGN KEY(stack_card_id) REFERENCES stack_card(stack_card_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS user_block_stack_card CASCADE;
CREATE TABLE user_block_stack_card (
  user_id BIGINT,
  stack_card_id BIGINT,
  PRIMARY KEY (user_id, stack_card_id),
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_stack_card_id FOREIGN KEY(stack_card_id) REFERENCES stack_card(stack_card_id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS user_report_stack_card CASCADE;
CREATE TABLE user_report_stack_card (
  user_id BIGINT,
  stack_card_id BIGINT,
  PRIMARY KEY (user_id, stack_card_id),
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  CONSTRAINT fk_stack_card_id FOREIGN KEY(stack_card_id) REFERENCES stack_card(stack_card_id) ON DELETE CASCADE
);

CREATE OR REPLACE VIEW user_info (
  user_id,
  username,
  nickname,
  birthdate,
  first_name,
  last_name,
  email,
  phone,
  pronouns,
  bio,
  website,
  profile_img_url,
  background_img_url,
  created_on,
  followed_count,
  following_count,
  num_stacks_created,
  num_stacks_subscribed,
  num_posts
) AS
SELECT
  user_id,
  username,
  nickname,
  birthdate,
  first_name,
  last_name,
  email,
  phone,
  pronouns,
  bio,
  website,
  profile_img_url,
  background_img_url,
  created_on,
  (SELECT count(*) from user_follow_user where following_user_id = users.user_id),
  (SELECT count(*) from user_follow_user where followed_user_id = users.user_id),
  (SELECT count(*) from stack where stack.user_id = users.user_id),
  (SELECT count(*) from user_subscribe_stack where user_subscribe_stack.user_id = users.user_id),
  (SELECT count(*) from post where post.user_id = users.user_id)
from users;

-- CREATE OR REPLACE VIEW post_info (
  
-- ) AS

-- CREATE OR REPLACE VIEW comment_info (
  
-- ) AS

-- CREATE OR REPLACE VIEW article_info (
  
-- ) AS

-- CREATE OR REPLACE VIEW stack_info (
  
-- ) AS

-- CREATE OR REPLACE VIEW stack_card_info (
  
-- ) AS

INSERT INTO users (username, password, nickname, birthdate, first_name, last_name, email, phone, pronouns, bio, website, profile_img_url, background_img_url, created_on) VALUES
('spiderman', 'iamnotpeterparker', 'Peter Parker', '1996-06-01', 'Tom', 'Holland', 'tomholland@gmail.com', null, 'He/Him', 'Your friendly neighborhood spiderman ;)', null, 'https://cdn.vox-cdn.com/thumbor/SbX1VbxJhxijxD1tzRTJ8uq38P4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19101461/spider_man_far_from_home_peter_parker_1562394390.jpg', 'https://wallpapercave.com/wp/wp7806389.jpg', '2021-12-29 22:00:00'),
('therock', 'iamtherock', 'The Rock', '1972-05-02', 'Dwayne', 'Johnson', 'dwaynejohnson@gmail.com', null, 'He/Him', 'Can you smell what Im cookin?', null, 'https://pbs.twimg.com/profile_images/3478244961/01ebfc40ecc194a2abc81e82ab877af4_400x400.jpeg', 'https://cdn.wallpapersafari.com/36/2/h9Hqcu.jpg', '2022-1-3 20:43:00');

INSERT INTO source (name, logo_url) VALUES
('The Guardian', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/The_Guardian_2018.svg/1200px-The_Guardian_2018.svg.png');

INSERT INTO article (source_id, url, title, text, author, date, cover_img) VALUES
(1, 'https://www.theguardian.com/us-news/2021/dec/29/joe-biden-vladimir-putin-talks-russia-ukraine', 'Biden to speak with Putin amid Russia''s increased presence near Ukraine', 'Joe Biden will speak on Thursday with Vladimir Putin regarding the Russian leader''s increased security demands in eastern Europe.

The two leaders will discuss a range of topics, including "upcoming diplomatic engagements in Russia", said US national security council spokesperson Emily Horne in a statement announcing the call.

Thursday''s talks come at the request of Russia amid Russia''s increased security presence near Ukraine as the US and its allies watch on warily. The buildup of Russian troops near the Ukrainian border has grown to an estimated 100,000 and has fueled fears that Moscow is preparing to invade Ukraine.

"This dialogue should, and we expect will, proceed on the basis of reciprocity. There will be topics where we can make meaningful progress and topics where we will have differences. That''s the nature of diplomacy," said a senior Biden administration official in a background press call.

On Wednesday, the US secretary of state, Antony Blinken, spoke with the Ukrainian president, Volodymyr Zelenskiy.

According to state department spokesman Ned Price, Blinken "reiterated the United States'' unwavering support for Ukraine''s independence, sovereignty and territorial integrity in the face of Russia''s military buildup on Ukraine''s borders".

"We have had very good discussions with the Ukrainian side in terms of short-term confidence-building measures that they have put on the table with the Russian side... We have seen a real willingness on the part of the Ukrainian side to put forward proposals aimed at confidence building de-escalation," the senior official said.

Earlier this month, Biden and Putin held a virtual summit regarding the Ukraine crisis but made little apparent headway.

"The discussion between President Biden and President Putin was direct and straightforward. There was a lot of give and take, there was no finger-wagging. But the president was crystal clear about where the United Stated stands on all these issues," said the US national security adviser, Jake Sullivan.

During those talks, Putin demanded "reliable, legal guarantees" that would prevent Nato''s expansion towards Russia or place missile systems in Russia''s bordering countries.

Shortly after the talks, Russia put forward a list of highly contentious security guarantees it says it wants the west to agree to in order to reduce tensions in Europe and defuse the crisis over Ukraine.

The demands include a ban on Ukraine from entering Nato and limiting troop deployment and weapons to Nato''s eastern flank. Russia has also asked Nato to not hold drills without previous agreement from Russia in Ukraine, eastern Europe, in Caucasus countries or in Central Asia.

Moscow has said that ignoring its interests will result in a "military response" similar to the Cuban missile crisis in 1962.

On Sunday, Putin said he would consider a slew of options if the west fails to meet his push for security guarantees precluding Nato''s expansion to Ukraine.

In Wednesday''s statement, Horne said: "President Biden has spoken with leaders across Europe, and Biden administration officials have engaged multilaterally with Nato, the EU and the OSCE [Organization for Security and Cooperation in Europe].

"The Biden administration continues to engage in extensive diplomacy with our European allies and partners, consulting and coordinating on a common approach in response to Russia''s military build-up on the border with Ukraine."

The senior official said that the US is "also prepared to respond if Russia advances with a further invasion of Ukraine".

"We have made plans to reinforce Nato''s force posture in Allied states in the event of a further invasion... and we are prepared to provide Ukraine with further assistance to defend its territory," he added.

Nevertheless, he reiterated that Biden will emphasize to Putin that "there is a clear diplomacy path to deescalating tensions in the region if President Putin is interested in taking it".

', 'Maya Yang', '2021-12-29', 'https://i.guim.co.uk/img/media/19be2b5025e150ac06f98f12108d28b683a46d24/0_0_7485_4491/master/7485.jpg?width=620&quality=85&auto=format&fit=max&s=6a1ddeb65a32ea9af7d50e34ffb32a18');

INSERT INTO post (user_id, media_type, text, media_photo_url, media_video_url, media_stack_id, media_comment_id, media_post_id, media_article_id, created_on) VALUES
(1, 'photo', 'Spider-Man: No Way Home Leaked Pics Confirm Multiverse Crossover; Andrew Garfield & Tobey Maguire Spotted In The Climax Scene', 'https://www.koimoi.com/wp-content/new-galleries/2021/11/spider-man-no-way-home-leaked-pictures-show-tom-holland-andrew-garfield-tobey-maguire-in-the-same-frame-001.jpg', null, null, null, null, null, '2021-12-29 22:29:00');

INSERT INTO comment (user_id, parent_post_id, parent_comment_id, text, created_on) VALUES
(1, 1, null, 'This is so fake btw. As much as y''all wish this was real, if Tobey Maguire and Andrew Garfield met me in real life, one of them would walk out with a missing leg. That''s a guarantee.', '2021-12-29 22:30:00');

INSERT INTO stack (user_id, title, description, img_url, created_on, last_updated) VALUES
(1, 'My Movie Leaks', 'All of the goodies that I have leaked over the years :D', 'https://i.ytimg.com/vi/zOawYArdT8s/maxresdefault.jpg', '2021-12-29 23:00:00', '2021-12-29 23:12:47'); 

INSERT INTO stack_card (stack_id, category, media_article_id, media_post_id, media_comment_id) VALUES
(1, 'article', 1, null, null),
(1, 'post', null, 1, null),
(1, 'comment', null, null, 1);

INSERT INTO user_like_post VALUES (1, 1);

INSERT INTO user_follow_user VALUES (1, 2);

INSERT INTO user_subscribe_stack VALUES (2, 1);

INSERT INTO user_like_comment VALUES (2, 1);

INSERT INTO user_like_article VALUES (1, 1), (2, 1);

INSERT INTO user_bookmark_article VALUES (2, 1);

INSERT INTO user_like_stack_card VALUES (1, 1), (1, 2), (2, 1), (2, 3);