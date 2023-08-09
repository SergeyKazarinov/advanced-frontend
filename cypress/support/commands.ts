/// <reference types="cypress" />

import { login } from './commands/login';
import * as profileCommands from './commands/profile';

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

export { };
