from flask import Flask, jsonify, request

app = Flask(__name__)

def xor_encrypt_decrypt(data, key):
    return ''.join(chr(ord(c) ^ ord(key[i % len(key)])) for i, c in enumerate(data))

@app.route('/api/decrypt', methods=['POST'])
def decrypt():
    data = request.get_json()
    key = data['key']
    text = data['text']
    decrypted_text = xor_encrypt_decrypt(text, key)
    return jsonify({'decrypted': decrypted_text})

if __name__ == "__main__":
    app.run(debug=True)
