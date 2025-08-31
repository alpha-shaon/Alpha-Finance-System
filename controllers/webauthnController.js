export const registerCredential = async (req, res) => {
  res.json({ message: 'WebAuthn credential registered (stub).' });
};

export const verifyCredential = async (req, res) => {
  res.json({ message: 'WebAuthn credential verified (stub).' });
};
