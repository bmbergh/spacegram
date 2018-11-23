# Spacegram

http://spacegram.herokuapp.com/

### *Photo viewing app for the space enthusiast*

## Task

Build a flickr web-app that fetches images from Nasa's account via the Flickr API (API details). You are welcome to use any technology to build it and design the layout in any way that you see fit.

## Criteria

- Choice of design, layout and intuitiveness of interface
- Responsiveness across various form factors
- Page load times and performance
- Browser compatibility on current release, current release-1 versions of browsers
- Sorting and or filter options available to user
- Use of source control to store code

## Summary of Tech Stack
This app was built using the latest and greatest technologies out today. I chose to build it in React becuase I know *Instagram* uses **React** which is a photo sharing app with impeccable load times. I chose to use **Redux** as my single state handler becasue of its overall clean and  effective way of handling the state of the application especially for scaling it larger. I chose **Webpack** beause well, I love using it. It takes away the layer that other task runners like Gulp and Grunt add to projects. I didn't build out the server file till I needed to launch it on **Heroku** . I went with a simple **Node** server with **Hapi** because, why not learn a ***new*** framework for this challenge? :) . I deployed it on Heroku for your viewing pleasure. 

## Functionality
This app loads in all the photos from Nasa's Flickr page. From there I created a search option at the top which gives users the ability to search through the photos based on words in the title. I also created a liking system. You will notice little hearts (created with CSS) next to the titles that uses can click to like. These likes are saved in state with the user. The next steps for this app would be to create a profile view based on that likes. I would filter the photos based on those users likes. (This hasn't been done but I will actually implement it since seems like something useful for any user and gives me the opportunity to keep building in React.) 

## Design
I chose a familar design to most, Instagram. I went with this because I love the simplicity of it. This is a photo viewing app and the photos are what draw the users in and I wouldn't want to take away from that. The next piece I am building with the filter based on likes will bring the user to a grid layout of photos they like. 

## Run Locally 

- Run this command `git clone https://github.com/bmbergh/spacegram.git`
- Run `npm install`
- Double check your ports ...that can usually cause errors :) 
- Run `npm run start-dev`
- You are now in the dev environment and you can play around 

## Tech Stack

- React
- Redux
- Webpack
- Flickr API
- Node
- Hapi
- Heroku
