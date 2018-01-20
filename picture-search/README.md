This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Link to the Project
https://image-searcher.netlify.com/

## Planning the Project
1. When I started the project, I used create-react-app to create a react template.
2. Then I formatted the files and folders in the src folder by components. I organized the folder names by components as opposed to creating a component and css folder and dumping all components to the component folder and all css files in the css folder because it is easier to navigate through the folder and find the files you need when your app gets bigger. 
3. Then I build a HTML structure of how app will look like since a poor structure can lead to unknown CSS errors.
4. After that, I started working on the features of the project. I worked on this before the CSS part because I like to get backbone working before decorating it. 
5. Then, I worked on the CSS parts of the project and made it responsive by following a mobile-first design. When working mobile-first, I first decide on a pair of font I want to use so that I don't have to go back and forth fixing font issues.

## Planning the Spell Checker Algorithm
1. When creating the spell checker algorithm, I had to implement 2 features which were removing non-letter characters and replacing vowels in characters.
2. For removing non-letter characters, 
    1. Create a variable that stores an empty string.
    2. Go through the word.
    3. Add the letters from the word that are letters and skip over non-letters.
    4. Check if the newWord exist or not. If it does, do the api call. If it doesn't, then call the replace vowel algorithm.
3. For the replace vowel algorithm, I wasn't able to think of a recursive algorthm that displays all the words with different vowels. As a result, I came up with a algorithm that works some of the time.
    1. Create a array that stores all the words that exist.
    2. Go through the word that have no non-letters.
    3. Check if the current letter is a vowel of not. If it is, then go through the string that contains all vowels and replace the current vowel.
    4. As you replace them, check if the word exists. If it does, then add it to the array.
    5. Once you finish going through each letter of the word, then do a api call if array has any words in them. 
