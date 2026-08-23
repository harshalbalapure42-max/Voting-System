create database voting ; 
use voting ; 
create table admin (username varchar (50), password varchar (100)) ; 
create table registeredVoters (name varchar (50), surname varchar (50), age int, email varchar (50), password varchar (100)) ; 
create table  rejectedVoters (name varchar (50), surname varchar (50), age int, email varchar (50), password varchar (100)) ; 
create table voteCount (party varchar (50), votes int) ; 
create table voters (voter_id int primary key auto_increment, name varchar (50), surname varchar (50), age int, email varchar (50), password varchar (100), vote int) ; 