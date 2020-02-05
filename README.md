## For the User

Robots complete a number of tasks defined at robot creation. <br />
Robots work on these tasks one after the other. <br/>
Once a task is complete, the task status turns green (I liked this better than disappearing) <br />
Once the robot has finished all of its tasks, it is essentially dead. It can no longer complete new tasks. <br />

## Getting Started

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Design

### A quick note
In my technical interview, I was asked if I had used any of the newest React Hooks that had come out. I had not so I thought this project was a perfect oppurtunity to try them out. Thus the entire project is built with functional components that use React Hooks. Specifically, I used the useState and useEffect hooks.

### intial design
Initallity, it seemed natural to keep all bussiness logic relating to robots in robots and all logic relating to tasks in tasks. I would then expose necessary functionality to the other class.

###  re-design
The amount of data that was shared between these two components was larger than I realized so I pivoted into a more MVC framework. Now, the robots class and the Tasks class are as STUPID as I could feasibly make them. All bussiness logic for these models is controlled in RobotTaskController. Although RobotTaskController might not be the most readble class, sharing much of the bussiness logic relating to coordinating tasks and robots one place avoided passing data between sibling components.





