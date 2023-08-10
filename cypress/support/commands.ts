/// <reference types="cypress" />

import * as articleCommands from './commands/article';
import * as commentsCommands from './commands/comments';
import { login } from './commands/login';
import * as profileCommands from './commands/profile';
import * as ratingCommands from './commands/rating';

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add('login', login);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentsCommands);
Cypress.Commands.addAll(ratingCommands);

export {};
