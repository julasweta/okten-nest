--
-- PostgreSQL database dump
--
-- Dumped from database version 16.0 (Debian 16.0-1.pgdg110+1)
-- Dumped by pg_dump version 16.0 (Debian 16.0-1.pgdg110+1)
SET
    statement_timeout = 0;

SET
    lock_timeout = 0;

SET
    idle_in_transaction_session_timeout = 0;

SET
    client_encoding = 'UTF8';

SET
    standard_conforming_strings = on;

SELECT
    pg_catalog.set_config('search_path', '', false);

SET
    check_function_bodies = false;

SET
    xmloption = content;

SET
    client_min_messages = warning;

SET
    row_security = off;

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

SET
    default_tablespace = '';

SET
    default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: public; Owner: user
--
CREATE TABLE public.users (
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "userName" text NOT NULL,
    email text NOT NULL,
    city text NOT NULL,
    age integer NOT NULL,
    status boolean NOT NULL
);

ALTER TABLE
    public.users OWNER TO "user";

--
-- Name: users2; Type: TABLE; Schema: public; Owner: user
--
CREATE TABLE public.users2 (
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "userName" text NOT NULL,
    email text NOT NULL,
    city text NOT NULL,
    age integer NOT NULL,
    status boolean NOT NULL
);

ALTER TABLE
    public.users2 OWNER TO "user";

--
-- Data for Name: spatial_ref_sys; Type: TABLE DATA; Schema: public; Owner: user
--
COPY public.spatial_ref_sys (srid, auth_name, auth_srid, srtext, proj4text)
FROM
    stdin;

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: user
COPY public.users (
    "createdAt",
    "updatedAt",
    id,
    "userName",
    email,
    city,
    age,
    status
)
FROM
    stdin;

2023 -10 -27 19 :24 :59.230226 + 00 2023 -10 -27 19 :24 :59.230226 + 00 4acc9f00 - 3fd4 - 45a0 - a5fc - a9c0fb061105 М755Router57 mar575d2 @pl2e.com Lviv 37 t 2023 -10 -28 13 :21 :37.037393 + 00 2023 -10 -28 13 :21 :37.037393 + 00 4e1382fe - d765 -4060 - acd6 - 2ebc75753ec9 М755Router57 ma75gd2 @pl2e.com Lviv 37 t 2023 -10 -28 17 :31 :56.152067 + 00 2023 -10 -28 17 :31 :56.152067 + 00 dc53ef38 - 07f4 - 45bb - ac17 - 1533d690a65a М755Router57 ma75gd253 @pl2e.com Lviv 37 t 2023 -10 -28 17 :35 :27.847098 + 00 2023 -10 -28 17 :35 :27.847098 + 00 b6a9402d -9783 - 4ef7 - acfb - b5e674375c7a М755Router57 ma75gd3 @pl2e.com Lviv 37 t 2023 -10 -28 17 :42 :14.461025 + 00 2023 -10 -28 17 :42 :14.461025 + 00 77c80555 - e6c5 - 4e93 - bd90 - 9dc9e44f88a0 М755Router57 ma75gd3l2e @gmail.com Lviv 37 t 2023 -10 -28 17 :53 :33.5918 + 00 2023 -10 -28 17 :53 :33.5918 + 00 75e1d048 -2025 -4393 - 850f - 8cc333ffaf4c М755Router57 md37l2e @gmail.com Lviv 37 t 2023 -10 -28 17 :55 :36.847325 + 00 2023 -10 -28 17 :55 :36.847325 + 00 bc55a2e5 - 100c - 4e02 -8302 - 68d27cce0c72 М755Router57 md371 @gmail.com Lviv 37 t 2023 -10 -28 18 :04 :19.388172 + 00 2023 -10 -28 18 :04 :19.388172 + 00 fbc8a150 - a012 - 407e -8077 - b3bc2f8d7605 М755Router57 md1 @gmail.com Lviv 37 t 2023 -10 -28 18 :13 :19.275115 + 00 2023 -10 -28 18 :13 :19.275115 + 00 b1b72cf3 - d94a - 45a4 - aa95 - 0cef564d2226 М755Router57 md15 @gmail.com Lviv 37 t 2023 -10 -28 18 :18 :30.351391 + 00 2023 -10 -28 18 :18 :30.351391 + 00 5ef4cd4a -2555 -4634 - 929b - b75f86a807ec М755Router57 md15 @gail.com Lviv 37 t 2023 -10 -28 18 :22 :53.926592 + 00 2023 -10 -28 18 :22 :53.926592 + 00 54ad2e72 - cf6f - 4c03 - 84a1 - 59a6d4214ccb М755Router57 2md15 @gmail.com Lviv 37 t 2023 -10 -28 18 :23 :34.302843 + 00 2023 -10 -28 18 :23 :34.302843 + 00 467789fa - 9d09 - 479b - ace7 - 34bb2799006c М755Router57 2md15 @glmail.com Lviv 37 t 2023 -10 -28 18 :40 :25.009921 + 00 2023 -10 -28 18 :40 :25.009921 + 00 2d80d553 -7487 - 4c89 - a6d4 - 6a81a21c5fed М755Router57 2md15 @lmail.com Lviv 37 t 2023 -10 -28 18 :47 :21.606711 + 00 2023 -10 -28 18 :47 :21.606711 + 00 67384e40 - c513 -4290 - b591 - 93a8f4e9488b М755Router57 2md15в @lmail.com Lviv 37 t 2023 -10 -28 18 :49 :39.024648 + 00 2023 -10 -28 18 :49 :39.024648 + 00 62e6277f - cbf8 - 4db8 - baa5 - fb15a7b9b84c м755router57 2md1п5в @lmail.com Lviv 37 t 2023 -10 -28 18 :49 :48.95748 + 00 2023 -10 -28 18 :49 :48.957 -- Data for Name: users2; Type: TABLE DATA; Schema: public; Owner: user
--
COPY public.users2 (
    "createdAt",
    "updatedAt",
    id,
    "userName",
    email,
    city,
    age,
    status
)
FROM
    stdin;

- -- Data for Name: geocode_settings; Type: TABLE DATA; Schema: tiger; Owner: user
--
COPY tiger.geocode_settings (name, setting, unit, category, short_desc)
FROM
    stdin;

- -- Data for Name: pagc_gaz; Type: TABLE DATA; Schema: tiger; Owner: user
--
COPY tiger.pagc_gaz (id, seq, word, stdword, token, is_custom)
FROM
    stdin;

-- Data for Name: pagc_lex; Type: TABLE DATA; Schema: tiger; Owner: user
--
COPY tiger.pagc_lex (id, seq, word, stdword, token, is_custom)
FROM
    stdin;

-- Data for Name: pagc_rules; Type: TABLE DATA; Schema: tiger; Owner: user
--
COPY tiger.pagc_rules (id, rule, is_custom)
FROM
    stdin;

-- Data for Name: topology; Type: TABLE DATA; Schema: topology; Owner: user
--
COPY topology.topology (id, name, srid, "precision", hasz)
FROM
    stdin;

-- Data for Name: layer; Type: TABLE DATA; Schema: topology; Owner: user
--
COPY topology.layer (
    topology_id,
    layer_id,
    schema_name,
    table_name,
    feature_column,
    feature_type,
    level,
    child_id
)
FROM
    stdin;

-- Name: topology_id_seq; Type: SEQUENCE SET; Schema: topology; Owner: user
--
SELECT
    pg_catalog.setval('topology.topology_id_seq', 1, false);

--
-- Name: users2 PK_5d240a524836c0224802471082d; Type: CONSTRAINT; Schema: public; Owner: user
--
ALTER TABLE
    ONLY public.users2
ADD
    CONSTRAINT "PK_5d240a524836c0224802471082d" PRIMARY KEY (id);

--
-- Name: users PK_a3ffb1c0c8416b9fc6f907b7433; Type: CONSTRAINT; Schema: public; Owner: user
--
ALTER TABLE
    ONLY public.users
ADD
    CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id);

--
-- Name: users UQ_97672ac88f789774dd47f7c8be3; Type: CONSTRAINT; Schema: public; Owner: user
--
ALTER TABLE
    ONLY public.users
ADD
    CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE (email);

--
-- Name: users2 UQ_c99683fef21763e8722965af914; Type: CONSTRAINT; Schema: public; Owner: user
--
ALTER TABLE
    ONLY public.users2
ADD
    CONSTRAINT "UQ_c99683fef21763e8722965af914" UNIQUE (email);

--
-- PostgreSQL database dump complete
--