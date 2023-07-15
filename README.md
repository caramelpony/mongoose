# MongoDB Example Project
## By: [caramelpony](https://github.com/caramelpony/)

### TODO Still:
- [ ] | Implement Express API for handling data
- [ ] | Implement WS to simulate players connecting
- [ ] | Create Client to simulate player

### Pre-Requisites
- [ ] | [MongoDB Instance](https://www.mongodb.com/)
- [x] | [Mongoose Library (Pre-Installed)](https://www.npmjs.com/package/mongoose)
- [x] | [Mongoose Find or Create Library (Pre-Installed)](https://www.npmjs.com/package/mongoose-findorcreate)
- [x] | [DotEnv Library](https://www.npmjs.com/package/dotenv)

### Project Structure
```
.
├── README.md              - Guide & FAQ
├── app.js                 - Source for application
├── package.json           - Project info and dependencies
├── package-lock.json      - Manages package versioning
├── Models/
│   ├── item.js            - Schema for Item Objects in DB
│   └── player.js          - Schema for Player Objects in DB
└── node_modules/
    └── ...                - Various library files
```

#### Part 1: Installing MongoDB
Install a MongoDB database to work with. (Two Methods)
+ [Install MongoDB Locally](https://www.mongodb.com/try/download/community)
    1. Download the MSI installer.
    2. Launch the installer, following the prompts.
        - Choose Complete setup type.
        - When prompted for Service Configuration, **uncheck** "Install MongoDB as a Service"
        - **Check**  "Install MongoDB Compass" to assist with viewing/edit the DB.
    3. Once complete move to [Part 3](#Part-3:-Connecting-to-MongoDB).
+ [Use MongoDB Atlas (Free 512MB Cluster)](https://www.mongodb.com/try?tck=community_atlas_ct)
    1. Navigate to [MongoDB Atlas](https://www.mongodb.com/try?tck=community_atlas_ct)
    2. Make an account or login with another provider.
    3. Verify your email.
    4. On the welcome screen fill out the survey.
        - Our goal is exploring what we can build.
        - We're just exploring.
        - Preferred language is **JavaScript**.
    5. Choose the **M0** tier of DB, which is free.
        - You can choose any provider, I prefer **AWS**.
        - I recommend **us-west-2** for the region.
    6. In the next step, choose **Username and Password** authentication.
        - Certificate is more secure but won't be covered in this guide.
        - Create a secure and memorable username and password, and keep them safe.
    7. When asked where you are connecting from, choose **My Local Environment**.
        - Cloud Environment is appropriate if you plan on deploying your app, where you can set access lists and private endpoints, but that is beyond our scope for today.
        - Your IP will automatically be added to the access list, for testing purposes add **0.0.0.0/0** to allow all IP addresses to connect. ***I highly recommend changing this before deploying to production.***
    8. Finish and Close, moving to [Part 2](#Part-2:-Running-MongoDB).

#### Part 2: Running MongoDB
+ If you installed MongoDB on your local PC, since we didn't use a local service, it must be enabled manually.
    1. Create a directory for your DB.
        - In this example, we will use **C:\data\db**.
        - Use `cd C:\` to navigate to the root of the drive.
        - Using `md "\data\db"` we can create the necessary directories.
    2. Start MongoDB w/ the Directory as an argument.
        - Using the command `"C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe" --dbpath="c:\data\db"` we tell MongoDB to use the directory we created.
    3. Move to [Part 3](#Part-3:-Connecting-to-MongoDB).

#### Part 3: Connecting to MongoDB
There are two steps to consider here, connecting to MongoDB using our Compass application to manage and view our data, and also providing the proper connection string to our application using **dotenv** which we will configure shortly.