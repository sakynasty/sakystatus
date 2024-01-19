var re = /^(status\.(sakynasty)\.com|(localhost))$/;
if (!re.test(location.hostname)) {
	console.error(
		'[LOC](SakyStatus) Connected via a unwhitelisted domain name: ' + location.hostname
	);
	location.href = 'https://status.sakynasty.com';
} else {
	console.info('[LOC](SakyStatus) Connected via a whitelisted domain name: ' + location.hostname);
}
