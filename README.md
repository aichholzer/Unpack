# Unpack
Proof of concept. Unzip files into sub-folders as specified by the file name.

Run: `node lib/`

You can tell the script where the .zip files are placed, relatively to the application:
`node lib/ files`

There are three test files included in this project (in the files folder). Running the application will create folders based on their file names, extract them into their respective folders and delete the .zip files.

The example .zip files are:

* city.madrid.zip
* city.london.zip
* person.girl.zip

Running the application will produce a folder structure like:

```
/files
  /city
    /madrid
    /london
  /person
    /girl
```

The content of each .zip file will, respectively, be placed in each one of these folders.
