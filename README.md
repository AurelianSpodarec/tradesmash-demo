# [Trading Journal](https://tradesmash-demo.vercel.app/)

![image](https://i.imgur.com/MyBfrEu.png)

Opensource trading journal that lets you create trades and assign notes and feelings for each trade.

The back-end has not been implemented, and instead I have created fake.json files located in `database/migrations` to act as if it was live data from the back-end.

I'm using Redux to work with the data as if it was back-end, however for this app in production I would use React Query and avoid Redux as its not needed.

# Installing the project

### `npm install` 

Installs required packages.

### `npm run dev`

Runs the app in the development mode.\
Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

Once the app is built, you might run the preview command.

The vite preview command will boot up a local static web server that serves the files from dist at http://localhost:4173. It's an easy way to check if the production build looks OK in your local environment.


# Project Structure 
Explanation and overview of the overall project structure.

### Styles
TailwindCSS structure emphasizes minimal use of styles. 

Configuration values are set in either tailwind.config.js or theming.scss within the base folder. TailwindCSS streamlines styling with its efficient and elegant approach, replacing the need for pure CSS or Scss variables. 

The folder prefixes prioritize order, as some folders require interdependent functionality and must be imported to function properly.

``` 
/styles  
├── /0-vendor       # 3rd party libraries i.e tailwindcss, fonts and so on  
├── /1-helpers      # mixins   
├── /2-base         # global styles, theming etc...  
├── /3-layouts      # global layouts such as: header, footer, nav, sidebar  
├── cheat.scss      # hot fixes - should be cleaned once a while  
├── styles.scss     # imports all above, it gives a nice overlook on all imports, as they do need to follow an order  
```


Created by *Aurelian Spodarec*. Powered by Vercel.