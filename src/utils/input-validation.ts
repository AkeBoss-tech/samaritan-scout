// input-validation.ts

// Function to check if input is null or undefined
export function isNullOrUndefined(input: any): boolean {
  return input === null || input === undefined;
}

// Function to check if input is a valid email address
export function checkEmail(email: string): void {
  if (isNullOrUndefined(email)) {
    throw new Error('Email is null or undefined');
  }

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailRegex.test(email)) {
    throw new Error('Invalid email format');
  }
}

// Function to check if input is a valid phone number
export function checkPhoneNumber(phoneNumber: string): void {
  if (isNullOrUndefined(phoneNumber)) {
    throw new Error('Phone number is null or undefined');
  }

  const phoneRegex = /^\d{10}$/; // Change this regex according to your phone number format
  if (!phoneRegex.test(phoneNumber)) {
    throw new Error('Invalid phone number format');
  }
}

// Function to check if input is a valid name
export function checkName(name: string): void {
  if (isNullOrUndefined(name)) {
    throw new Error('Name is null or undefined');
  }

  // Add your name validation regex here
  // Example: const nameRegex = /^[A-Za-z\s]+$/;
  // if (!nameRegex.test(name)) {
  //   throw new Error('Invalid name format');
  // }
}
