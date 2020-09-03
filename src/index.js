import _ from 'lodash';
import './style.css';
import profilePic from './profilepic.jpg';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const image = new Image();
  image.src = profilePic;
  element.appendChild(image);

  return element;
}

document.body.appendChild(component());