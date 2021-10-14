# cv-project

A React project that lets you enter info to create a resume/cv

## Notes

Enter some info and it shows up on a resume/cv looking thing.

## Things I learned

holy moly, so many things
- uniqid() is great for being a key in a list of react components
- you don't need a constructor on every single component if it's just using props!
- out of the 4 CRUD actions (Create Read Update Delete), Read is the easiest, Update is the hardest
- \<input/> value attributes should just read from the state. Then when you change in the input, call a function to update the state.
- code snipets are awesome! especiially the VSCode extension 'ES7 React/Redux/GraphQL/React-Native snippets'
  - you can type 'rfce' and an huge bunch of code appears!
- updating lists in React
- How to pass multiple arguments in a function from a child component click all the way up 3 or 4 levels to where the function lives.
- setState is your friend
```
this.setState((prevState, props)=>
      ({
        task: {
          text: e.target.value,
          id: this.state.task.id,
        },
      }),
      () => {
        console.log('Some message');
        console.log('Another message');
      }
    );
```


### Learning React

- When you're learning React, start with one file. Create one extra component and stick it at the end, in the same file.  When you get the props passing correctly, then you can easily pull that component out into it's own file and get the imports hooked up.   
- I started from the component and worked my way up and confused myself.  I'm sure now that I understand all the little working parts it wouldn't be so confusing.
- I had to stop and create a scrap project I called the world's smallest CRUD app to figure out where I was going wrong.  When in doubt, go simple. As simple as you can.

### Next Time / Possible Improvements

- Add the ability to print it out, pdf or actual printing.
- Could try using more forms and onSubmit functions - just so I can get more practice using them. 
 - The way I have it now is that everything is updated on the input change instead of clicking submit to write to the state.
