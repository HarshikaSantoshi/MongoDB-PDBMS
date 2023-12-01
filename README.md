# MongoDB-PDBMS
A Product Database System using MongoDB and Node.js

The link to the ERD diagram:
https://lucid.app/lucidchart/ebf3307a-b46a-4be8-9428-c2dc6fb2e0bd/edit?beaconFlowId=63E651BA5430ED45&invitationId=inv_eeb5d055-f6bb-4f95-8ee9-ea52742a8423&page=0_0#

# Database Initialization Instructions

## Overview
This repository includes a dump file that allows you to regenerate the MongoDB database used in this project. Follow the steps below to initialize the database on your local environment.

## Prerequisites
1. **MongoDB Installed:**
   Make sure MongoDB is installed on your system. You can download and install MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community).

2. **MongoDB Tools:**
   Ensure that you have the MongoDB tools, including `mongorestore`, available on your system. These tools are typically included with the MongoDB server installation.

## Steps to Initialize the Database

### Step 1: Download the Repository
Clone or download this repository to your local machine.

### Step 2: Navigate to the Dump Folder
Navigate to the `dump` folder in the root directory of the cloned repository. This folder contains the MongoDB dump files.

### Step 3: Run mongorestore
Open a terminal and run the following command to restore the database from the dump:

```bash
mongorestore --uri="mongodb://localhost:27017" dump
