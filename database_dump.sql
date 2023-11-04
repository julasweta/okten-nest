--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0 (Debian 16.0-1.pgdg110+1)
-- Dumped by pg_dump version 16.0 (Debian 16.0-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: tiger; Type: SCHEMA; Schema: -; Owner: user
--

CREATE SCHEMA tiger;


ALTER SCHEMA tiger OWNER TO "user";

--
-- Name: tiger_data; Type: SCHEMA; Schema: -; Owner: user
--

CREATE SCHEMA tiger_data;


ALTER SCHEMA tiger_data OWNER TO "user";

--
-- Name: topology; Type: SCHEMA; Schema: -; Owner: user
--

CREATE SCHEMA topology;


ALTER SCHEMA topology OWNER TO "user";

--
-- Name: SCHEMA topology; Type: COMMENT; Schema: -; Owner: user
--

COMMENT ON SCHEMA topology IS 'PostGIS Topology schema';


--
-- Name: fuzzystrmatch; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS fuzzystrmatch WITH SCHEMA public;


--
-- Name: EXTENSION fuzzystrmatch; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION fuzzystrmatch IS 'determine similarities and distance between strings';


--
-- Name: postgis; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS postgis WITH SCHEMA public;


--
-- Name: EXTENSION postgis; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION postgis IS 'PostGIS geometry and geography spatial types and functions';


--
-- Name: postgis_tiger_geocoder; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS postgis_tiger_geocoder WITH SCHEMA tiger;


--
-- Name: EXTENSION postgis_tiger_geocoder; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION postgis_tiger_geocoder IS 'PostGIS tiger geocoder and reverse geocoder';


--
-- Name: postgis_topology; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS postgis_topology WITH SCHEMA topology;


--
-- Name: EXTENSION postgis_topology; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION postgis_topology IS 'PostGIS topology spatial types and functions';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: cars_producer_enum; Type: TYPE; Schema: public; Owner: user
--

CREATE TYPE public.cars_producer_enum AS ENUM (
    'bmw',
    'honda',
    'mersedes',
    'tesla'
);


ALTER TYPE public.cars_producer_enum OWNER TO "user";

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cars; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.cars (
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    model text NOT NULL,
    year integer NOT NULL,
    price integer NOT NULL,
    producer public.cars_producer_enum NOT NULL,
    "userId" uuid
);


ALTER TABLE public.cars OWNER TO "user";

--
-- Name: users; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.users (
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "userName" text NOT NULL,
    password text DEFAULT 'your_default_password'::text NOT NULL,
    email text NOT NULL,
    city text NOT NULL,
    age integer NOT NULL,
    status boolean NOT NULL
);


ALTER TABLE public.users OWNER TO "user";

--
-- Data for Name: cars; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.cars ("createdAt", "updatedAt", id, model, year, price, producer, "userId") FROM stdin;
2023-11-03 22:53:33.008206+00	2023-11-03 22:53:33.008206+00	bf6d59f0-748c-4df1-ad65-c59734fc191e	X5	2020	27000	bmw	83866f30-04dc-4e46-855f-35c4059ad040
2023-11-03 23:03:00.417294+00	2023-11-03 23:03:00.417294+00	f1bd9530-0d56-488e-9acc-51a69297be9e	X5	2020	22000	honda	83866f30-04dc-4e46-855f-35c4059ad040
2023-11-03 23:05:16.315581+00	2023-11-03 23:05:16.315581+00	82984a42-3ffb-4172-ba95-a14a3100e9d1	X5	2020	22000	honda	83866f30-04dc-4e46-855f-35c4059ad040
2023-11-03 23:08:17.025431+00	2023-11-03 23:08:17.025431+00	48cb2b44-a9ac-424d-b6bb-cd9cbb1b622b	X5	2020	22000	honda	83866f30-04dc-4e46-855f-35c4059ad040
2023-11-03 23:09:10.979117+00	2023-11-03 23:09:10.979117+00	cffe8363-ebdc-457d-8ecf-b081a3b890e4	X5	2020	22000	honda	83866f30-04dc-4e46-855f-35c4059ad040
2023-11-03 23:09:27.437455+00	2023-11-03 23:09:27.437455+00	487203bd-1d5e-47b9-99bb-0cf97d0ec0fb	X5	2020	22000	honda	83866f30-04dc-4e46-855f-35c4059ad040
2023-11-03 23:10:33.570459+00	2023-11-03 23:10:33.570459+00	70e6a206-19c6-44a2-a216-293e75debac4	X5	2020	22000	honda	83866f30-04dc-4e46-855f-35c4059ad040
2023-11-03 23:14:36.918675+00	2023-11-03 23:14:36.918675+00	fe69a9e3-1f5a-4c76-ac3d-384d6682b451	X5	2020	22000	honda	83866f30-04dc-4e46-855f-35c4059ad040
2023-11-03 23:15:08.937901+00	2023-11-03 23:15:08.937901+00	b41bc859-f64e-4251-be9d-f3cc30ba6bf7	X5	2020	22000	honda	83866f30-04dc-4e46-855f-35c4059ad040
2023-11-03 23:16:30.45433+00	2023-11-03 23:16:30.45433+00	5ac656bb-88e7-40b0-bcc3-d9213007f641	X5	2020	22000	honda	caebc065-f8a7-4ff8-871d-bb149f8cd910
\.


--
-- Data for Name: spatial_ref_sys; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.spatial_ref_sys (srid, auth_name, auth_srid, srtext, proj4text) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.users ("createdAt", "updatedAt", id, "userName", password, email, city, age, status) FROM stdin;
2023-11-02 22:25:18.999656+00	2023-11-02 22:25:18.999656+00	83866f30-04dc-4e46-855f-35c4059ad040	svitlana	@1234567@	jult5@ukr.net	Lviv	37	t
2023-11-03 15:43:43.656383+00	2023-11-03 15:43:43.656383+00	3df9876b-227e-41fb-bad9-12d6d410ba5e	svitlana	@1234567@	jult5g@ukr.net	Lviv	37	t
2023-11-03 23:07:37.809769+00	2023-11-03 23:07:37.809769+00	caebc065-f8a7-4ff8-871d-bb149f8cd910	svitlana	@1234567@	jultg5g@ukr.net	Lviv	37	t
\.


--
-- Data for Name: geocode_settings; Type: TABLE DATA; Schema: tiger; Owner: user
--

COPY tiger.geocode_settings (name, setting, unit, category, short_desc) FROM stdin;
\.


--
-- Data for Name: pagc_gaz; Type: TABLE DATA; Schema: tiger; Owner: user
--

COPY tiger.pagc_gaz (id, seq, word, stdword, token, is_custom) FROM stdin;
\.


--
-- Data for Name: pagc_lex; Type: TABLE DATA; Schema: tiger; Owner: user
--

COPY tiger.pagc_lex (id, seq, word, stdword, token, is_custom) FROM stdin;
\.


--
-- Data for Name: pagc_rules; Type: TABLE DATA; Schema: tiger; Owner: user
--

COPY tiger.pagc_rules (id, rule, is_custom) FROM stdin;
\.


--
-- Data for Name: topology; Type: TABLE DATA; Schema: topology; Owner: user
--

COPY topology.topology (id, name, srid, "precision", hasz) FROM stdin;
\.


--
-- Data for Name: layer; Type: TABLE DATA; Schema: topology; Owner: user
--

COPY topology.layer (topology_id, layer_id, schema_name, table_name, feature_column, feature_type, level, child_id) FROM stdin;
\.


--
-- Name: topology_id_seq; Type: SEQUENCE SET; Schema: topology; Owner: user
--

SELECT pg_catalog.setval('topology.topology_id_seq', 1, false);


--
-- Name: users PK_a3ffb1c0c8416b9fc6f907b7433; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id);


--
-- Name: cars PK_fc218aa84e79b477d55322271b6; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY (id);


--
-- Name: users UQ_97672ac88f789774dd47f7c8be3; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE (email);


--
-- Name: cars FK_6431b6fec12c4090bb357fba2c2; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT "FK_6431b6fec12c4090bb357fba2c2" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

