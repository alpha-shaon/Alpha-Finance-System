export default function BiometricLogin() {
  const handleBiometric = async () => {
    if (!window.PublicKeyCredential) {
      alert('WebAuthn not supported on this browser.');
      return;
    }

    try {
      const credential = await navigator.credentials.get({
        publicKey: {
          challenge: new Uint8Array(32),
          timeout: 60000,
          userVerification: 'preferred',
        },
      });
      console.log('Biometric credential:', credential);
      alert('Biometric login simulated. Ready for WebAuthn integration.');
    } catch (err) {
      console.error('Biometric login failed:', err);
      alert('Biometric login failed.');
    }
  };

  return (
    <div className='mt-4 text-center'>
      <button onClick={handleBiometric} className='bg-green-600 text-white px-4 py-2 rounded'>
        Use Biometric Login
      </button>
    </div>
  );
}
