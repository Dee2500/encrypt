from flask import Flask, jsonify, request

app = Flask(__name__)

def xor_encrypt_decrypt(data, key):
    return ''.join(chr(ord(c) ^ ord(key[i % len(key)])) for i, c in enumerate(data))

@app.route('/api/encrypt', methods=['POST'])
def encrypt():
    data = request.get_json()
    key = data['key']
    text = data['text']
    encrypted_text = xor_encrypt_decrypt(text, key)
    return jsonify({'encrypted': encrypted_text})

if __name__ == "__main__":
    app.run(debug=True)
