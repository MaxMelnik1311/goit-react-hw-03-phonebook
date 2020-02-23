export default function isNameAvailable(contacts, person) {
  return contacts.some(item => item.name === person);
}
