BEGIN;

DROP TABLE IF EXISTS directory;

CREATE TABLE directory_login(
     id serial PRIMARY KEY,
     organisation_name VARCHAR(100),
     organisation_type VARCHAR(50),
     login_email VARCHAR(100),
     login_password VARCHAR(100),
     address_1 VARCHAR(100),
     address_2 VARCHAR(100),
     address_3 VARCHAR(100),
     county VARCHAR(100),
     postcode VARCHAR(10),
     registered_number VARCHAR(20),
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
    tags VARCHAR(100)
)

CREATE TABLE directory_tags (
    directory_id INTEGER REFERENCES directory(id),
    tag_id INTEGER REFERENCES tags(id)
)

INSERT INTO directory (
    id,
    organisation_name,
    organisation_type,
    login_email,
    login_password,
    address_1,
    address_2,
    county,
    postcode,
    registered_number,
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
    application_status)
    VALUES (
        'Futureversity',
        'RichMix Shoreditch',
        '35-47 Bethnal Green Rd',
        'City of London',
        'E1 6QE',
        '1048822'
    )



COMMIT;