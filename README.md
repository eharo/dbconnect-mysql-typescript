# Setting the Environment

1.  Install the npm package:  
    `npm install typeorm --save`
2.  You need to install `reflect-metadata` shim:  
    `npm install reflect-metadata --save`  
    and import it somewhere in the global place of your app (for example in `app.ts`):  
    `import "reflect-metadata";`
3.  You may need to install node typings:  
    `npm install @types/node --save-dev`
4.  Install a database driver:

        - for **MySQL** or **MariaDB**

    `npm install mysql --save` (you can install `mysql2` instead as well)
