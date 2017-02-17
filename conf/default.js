module.exports = {
	apikey_production: 'FShURK8y5hlY2alNKhSEp3BHWOQBi4PE',
	apikey_development: 'FOtDonwa0TzN4nkMGx1RaiTh9NV8ng27',
	apikey_preproduction: '1OYE727NsB0eBZN10RjblrDdKe3zHQSo',
	APIKeyAuthType: 'basic',
	timeout: 120000,
	logLevel: 'error',
	logging: {
		logdir: './logs',
		transactionLogEnabled: true
	},
	apiPrefix: '/api',
	admin: {
		enabled: true,
		prefix: '/arrow',
		apiDocPrefix: '/apidoc',
		disableAuth: false,
		disableAPIDoc: false,
		disableDefault404: false,
		enableAdminInProduction: false
	},
	session: {
		encryptionAlgorithm: 'aes256',
		encryptionKey: 'MkUONFa9B/Ru19PU8vEYBEQGz1M3hexBKeH2V6jMGC4=',
		signatureAlgorithm: 'sha512-drop256',
		signatureKey: 'XCmWzHIbsIwzVwV+F7obR8wyyCrYWg+1cJ4n2U4jOO4t39oPqiHeUOXR4QmlVYxKeHthC8StAd7xzpg4c7KtZA==',
		secret: 'At9N3AucG/WMVqehTMZdObyY58U86ko8',
		duration: 86400000,
		activeDuration: 300000
	},
	cookieSecret: 'fELMOxbiuejqPnu/FtFjgH//tKj6hz7V',
	connectors: {
	},
	dateTimeFormat: 'yyyy:mm:dd, HH:MM:ss.l'
};
