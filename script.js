var story = 0; // prevent undefined
var form = document.getElementById('theAdventure');
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';


var story_telling = {
  "start": { //beginning of the story
    "question": "You are located in a tavern on the outskirts of town. After a few drinks at the tavern you decide it is time to leave. As you get out of the tavern, you go ...",
    "answers": {
      "a": "onto your trusty stallion, Steve.",
      "b": "into the forest.",
      "c": "pick a fight with a drunk man stumbling out of the bar.",
    }
  },
  // STEVE
  "1_a": {
    "question": "You get on your fine steed and you proceed to...",
    "answers": {
      "a": "go into the text town over.",
      "b": "go home.",
    }
  },

  "2_a": {
    "question": "On your way to the next town over you fall over as your horse gallops on. You get back up, take a swig from a bottle you still had and look around. you decide to...",
    "answers":{
        "a": "stumble into the foest.",
        "b": "Sit there.",
    }
  },
        "3_a":{
              "question": "As you get deeper and deeper into the forest you no longer see the lights coming from the town. It has been a while since you left the tavern now and the only thing lighting your way is the moonlight that peers through the trees. While on your drunken adventure you start to sober up, when all of a sudden you hear the trees rustling, twigs breaking, and ...",
                "answers": {
                  "d": "hear a wolf howling nearby.",
                  "e": "you turn around and...",
                  "f": "you run!",
                }
        },
            "4_d": {
                "question": "Scared, you start to panick. You see bright yellow eyes peer through the bush. A large werewolf comes out of nowhere a slices you up! Fading in and out of conciousness you see at times the werewolf drapped over your barely concious body. All of asudden you shoot up and sit up in your bed. Its 8:54 A.M. and you are late to your first class of the semester. END",
                   },
            "4_e": {
                "question": "it's your mother? What is your mother doing here? And she's angry at you because you did not eat any of the apple pie she made for you for Thanksgiving????? What the heck!!! Why did you not eat the pie! That's it! Story time is OVER!!!! END",
                   },
            "4_f": {
            "question": "You stumble out onto the road. All of a sudden you see a carriage in the road. You ...",
            "answers": {
                "7": "Stand in the middle of the road like a deer caught in the headlights",
                "8": "Run off into the bushes.",
                "9": "Stand onto the side of the road and call for help.",
                      }
          },
                "5_7": {
                    "question": "The carriage strikes you!! You get up but then you get hit by another carriage. You try and get up and esacpe but are suddenly dragged away by wolves. They bring you to their leader, a large troll living under a bridge. The troll makes you their bride. You have 50 children and you all live happily ever after. END",
                 },
                 "5_8": {
                    "question": "You dive head first into the bushes head first. You bump your head on a rock. You pass out immediately. What seems like a few moments later, you try and get up and esacpe but are suddenly dragged away by wolves. They bring you to their leader, a small dwarf living in a hollowed out tree. The dwarf makes you their bride. You have 500 children and you all live happily ever after. END",
                  },
                 "5_9" :{
                    "question": "The carriage comes to a complete stop. It's your mother? What is your mother doing here? And she's angry at you because you did not eat any of the apple pie she made for you for Thanksgiving????? What the heck!!! Why did you not eat the pie! That's it! FRIENDSHIP OVER!!!! END",
                 },
    "3_b": {
      "question": "You sit there. All alone... END.",
    },
  "2_b": {
    "question": "You get home. Sit there. All alone.... END.",
  },

  // FOREST

  "1_b": {
    "question": "As you get deeper and deeper into the forest you no longer see the lights coming from the town. It has been a while since you left the tavern now and the only thing lighting your way is the moonlight that peers through the trees. While on your drunken adventure you start to sober up, when all of a sudden you hear the trees rustling, twigs breaking, and ...",
    "answers": {
      "d": "hear a wolf howling nearby.",
      "e": "you turn around and...",
      "f": "you run!",
    }
  },
  "2_d": {
    "question": "Scared, you start to panick. You see bright yellow eyes peer through the bush. A large werewolf comes out of nowhere a slices you up! Fading in and out of conciousness you see at times the werewolf drapped over your barely concious body. All of asudden you shoot up and sit up in your bed. Its 8:54 A.M. and you are late to your first class of the semester. END",
  },
  "2_e": {
    "question": "it's your mother? What is your mother doing here? And she's angry at you because you did not eat any of the apple pie she made for you for Thanksgiving????? What the heck!!! Why did you not eat the pie! That's it! Story time is OVER!!!! END",
  },
  "2_f": {
    "question": "You stumble out onto the road. All of a sudden you see a carriage in the road. You ...",
    "answers": {
        "7": "Stand in the middle of the road like a deer caught in the headlights",
        "8": "Run off into the bushes.",
        "9": "Stand onto the side of the road and call for help.",
    }
  },
    "3_7": {
        "question": "The carriage strikes you!! You get up but then you get hit by another carriage. You try and get up and esacpe but are suddenly dragged away by wolves. They bring you to their leader, a large troll living under a bridge. The troll makes you their bride. You have 50 children and you all live happily ever after. END",
    },
    "3_8": {
        "question": "You dive head first into the bushes head first. You bump your head on a rock. You pass out immediately. What seems like a few moments later, you try and get up and esacpe but are suddenly dragged away by wolves. They bring you to their leader, a small dwarf living in a hollowed out tree. The dwarf makes you their bride. You have 500 children and you all live happily ever after. END",
    },
    "3_9" :{
        "question": "The carriage comes to a complete stop. It's your mother? What is your mother doing here? And she's angry at you because you did not eat any of the apple pie she made for you for Thanksgiving????? What the heck!!! Why did you not eat the pie! That's it! FRIENDSHIP OVER!!!! END",
  },

  // FIGHT!!

  "1_c": {
    "question": "As you left the tavern, ypu spot a man stumbling out of the bar, clearly drunk. You had had a few drinks yourself, and for some reason, you felt the sudden urge to pick a fight with him. You walk over to the man and got in his face, taunting him and goading him into a fight. At first, he tried to brush you off, but you wouldn't let up. Finally, the man had had enough. He swung at you, but you were able to dodge his punch and land a solid hit of your own. The fight was on. You both traded blows, both clearly drunk and not very skilled in the art of fighting. But you didn't care. You were caught up in the heat of the moment and enjoying the thrill of the fight. Eventually, the man managed to get the upper hand and knocked you to the ground. You looked up at him, expecting him to continue the fight, but to your surprise, he just shook his head and walked away. You laid there on the ground for a few moments, trying to catch my breath. The fight had been exhilarating, but in the end, it was pointless and foolish. You vowed to never let yourself get caught up in something like that again. END.",
},
  
};

// Continue link
submit.addEventListener('mouseup', function(){ //when a button on a pointing device is released while the pointer is located inside it
  answer = form.querySelectorAll('input[type=radio]:checked')[0].value; //a list of the document's elements that match the specified group of selectors.
  if(answer) {
    story++;//increment or add 1 to
    populateForm(story + '_' + answer);//if a radio is checked populate our form with the answer
    console.log("Story time!"); // Console log to make sure things are working
  }
});

// Reset button
function resetForm(){
    document.getElementById("theAdventure").reset();
}

// Generate answers from story
function populateForm(story) {
  var current_story = story_telling[story];//take values from story_telling story
  var text = '';

  for(var prop in current_story['answers']) {
    if(current_story['answers'].hasOwnProperty(prop)) { //method returns a boolean (true or false) indicating whether the object has the specified property as its own property
      text += '<label><input type="radio" name="answer" value="' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';// adding answers to the story
    }
  }

  form.querySelector('p').innerHTML = current_story.question;//write questions to the p tag in the HTML
  form.querySelector('fieldset').innerHTML = text;//write answers to the fieldset 
}

populateForm('start');//set the form at the beginning
