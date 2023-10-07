import { expect, test, describe } from "bun:test";
import { Email } from './Email';

describe('Email Validator', () => {

    // Waiting for Bun implementations  ===> https://bun.sh/docs/test/writing

    // test('should create a valid Email object', () => {
    //     const validEmails = [
    //         'example@example.com',
    //         'user1234@test.co',
    //         'myemail@test-domain.com',
    //     ];

    //     for (const email of validEmails) {
    //         expect(Email.create(email)).objectContaining(email);
    //     }
    // });

    // test('should return an error for an invalid email address', () => {
    //     const invalidEmails = [
    //         'notAnEmail',
    //         'user@',
    //         'user@.com',
    //         '@domain.com',
    //         'user@domain',
    //         'user@domain.',
    //     ];

    //     for (const email of invalidEmails) {
    //         expect(Email.create(email)).toThrowError(new Error('Invalid email address'));
    //     }
    // });
});
 