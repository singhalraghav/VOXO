$(document).ready(function() {
  // Get modal elements
  var modal = $('#modal');
  var modalTitle = $('#modal-title');
  var emailVerification = $('#email-verification');
  var passwordReset = $('#password-reset');
  var verifyEmailBtn = $('#verify-email-btn');
  var resetPasswordBtn = $('#reset-password-btn');
  var emailInput = $('#email');
  var newPasswordInput = $('#new-password');
  var confirmPasswordInput = $('#confirm-password');

  // Function to open modal
  function openModal() {
    modal.show();
  }

  // Function to close modal
  function closeModal() {
    modal.hide();
  }

  // Function to verify email
  function verifyEmail() {
    // TO DO: Implement email verification logic here
    // For demonstration purposes, we'll just hide the email verification section and show the password reset section
    emailVerification.hide();
    passwordReset.show();
    modalTitle.text('Reset Password');
  }

  // Function to reset password
  function resetPassword() {
    // TO DO: Implement password reset logic here
    // For demonstration purposes, we'll just alert the user that the password has been reset
    alert('Password has been reset!');
    closeModal();
  }

  // Add event listeners
  $('#open-modal-btnp').on('click', openModal);
  $('.closep').on('click', closeModal);
  verifyEmailBtn.on('click', verifyEmail);
  resetPasswordBtn.on('click', resetPassword);
});