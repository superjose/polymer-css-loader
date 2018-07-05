# Current Situation:
*Unreleased* pre-alpha. 
The file loader.js is now able to do what it is intended. You import a css, or .scss file and it automatically creates you the file based on the filename. I'm working on a query based mechanism that allows you to specify a custom name for it. Check the issues to see more about it.


# Work In Progress
This is a work-in-progress and is not available for public consumption yet. The **final availability may change**, as this could never be released. This is just an experiment

What this loader trying to achieve is to automatically create the styling JavaScript that is required for Polymer and Web Components.

# Future Requirements
* Polymer 3+ only!
* Webpack 4+ only!


# Why this loader
Writing a template inside JavaScript is not good for styling CSS or SASS (Some Text Editors and IDEs lose autocomplete and static checking). 

With this, you just include your .css in your Polymer component and the loader takes care for it. 



# Ideas? Feedback?
Open a Github issue now! 😊