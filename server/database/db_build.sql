BEGIN;

DROP TABLE IF EXISTS organisations, directory, tags, directory_tags;

CREATE TABLE organisations (
    id serial PRIMARY KEY,
    organisation_name VARCHAR(100),
    organisation_type VARCHAR(50),
    registered_number VARCHAR(50),
    telephone_number VARCHAR(22),
    email VARCHAR(100),
    password_set VARCHAR(100),
    verified BOOLEAN
);

CREATE TABLE directory(
    id serial PRIMARY KEY,
    organisation_id INTEGER REFERENCES organisations(id),
    address_1 VARCHAR(100),
    address_2 VARCHAR(100),
    address_3 VARCHAR(100),
    county VARCHAR(100),
    postcode VARCHAR(10),
    logo_url TEXT,
    general_info TEXT,
    support_offered TEXT,
    how_support_is_offered TEXT,
    places_we_work_in TEXT,
    contact_name VARCHAR(100),
    contact_email VARCHAR(100),
    contact_number VARCHAR(22),
    contact_job_role VARCHAR(100),
    detail_confirmation BOOLEAN,
    permission BOOLEAN,
    form_completed_by VARCHAR(100),
    application_status VARCHAR(10)
);

CREATE TABLE tags(
    id serial PRIMARY KEY,
    tag VARCHAR(100)
);

CREATE TABLE directory_tags (
    directory_id INTEGER REFERENCES directory(id),
    tag_id INTEGER REFERENCES tags(id)
);

INSERT INTO organisations (
    organisation_name,
    organisation_type,
    registered_number,
    telephone_number,
    email,
    password_set,
    verified
)
VALUES(
    'Futureversity',
    'charity',
    'registered_number',
    '02072477900',
    'onetomanysite@gmail.com',
    'asdfgh',
    'false'
);

INSERT INTO directory (
    organisation_id,
    address_1,
    address_2,
    county,
    postcode,
    logo_url,
    general_info,
    support_offered,
    how_support_is_offered,
    places_we_work_in,
    contact_name,
    contact_email,
    contact_number,
    contact_job_role,
    detail_confirmation,
    permission,
    form_completed_by,
    application_status
)
VALUES (
    (SELECT id from organisations WHERE email = 'onetomanysite@gmail.com'),
    'RichMix',
    '35 - 47 Bethnal Green road',
    'City of London',
    'E1 6QE',
    'http://www.futureversity.org/images/logo2.png',
    'Futureversity believes all young people have the potential to be extraordinary. We provide free courses and activities for 11-25 year olds to help them develop the skills and self-belief they need to make the most of their lives. Our programmes have been proven to raise aspirations, reduce youth crime, break down racial tensions and get unemployed young people off benefits and into work.',
    'We partner with businesses to give young people real experience of the world of     work through introductory courses, seminars and activities.
    We partner with schools to run our one of a kind Vacation Education programme for Year 9 students over the course of a school year.
    We run up to 50 courses in the borough of Greenwich each summer, giving 11-25 year olds something productive to do during their holiday.
    We deliver volunteer schemes for young people, encouraging them to take responsibility, use their initiative and gain team leadership experience.',
    'Young people can apply directly',
    'Tower Hamlets, Greenwich',
    'Jamila',
    'gbajaf@yahoo.co.uk',
    '07946167602',
    'Programmes manager',
    'Yes',
    'Yes',
    'Jamila',
    'Pending'
);

INSERT INTO tags (
    tag
) 
VALUES 
    ('Mental-health'),
    ('Homelessness'),
    ('Career and emp);loyability'),
    ('Workshops and short courses'),
    ('Mentoring'),
    ('Sports');


INSERT INTO directory_tags(
    directory_id,
    tag_id
)
VALUES(
    (SELECT id from organisations WHERE email = 'onetomanysite@gmail.com'),
    (SELECT id from tags WHERE tag = 'Workshops and short courses')
);

INSERT INTO directory_tags(
    directory_id,
    tag_id
)
VALUES(
    (SELECT id from organisations WHERE email = 'onetomanysite@gmail.com'),
    (SELECT id from tags WHERE tag = 'Career and employability')
);

COMMIT;