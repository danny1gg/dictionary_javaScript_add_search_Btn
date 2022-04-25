var dictionary = [];

function add_word() {
	let get_add_word = document.getElementById("add_word").value.trim().toLowerCase();
	let status = document.getElementById('status');
	if (check_for_clean_word(get_add_word, status)) {
		if (!(word_exists(get_add_word))) {
			dictionary.push(get_add_word);
			status.style.color = "green";
			status.innerHTML = "'<b style='color:blue;'>" + get_add_word + "</b>' added to dictionary!<br>";
		} else {
			status.style.color = "red";
			status.innerHTML = "Word '<b style='color:blue;'>" + get_add_word + "</b>' already exists!";
		}
	}
}

function search_word() {
	let get_search_word = document.getElementById("search_word").value.trim();
	let status = document.getElementById('status');
	if (check_for_clean_word(get_search_word, status)) {
		if (word_exists(get_search_word.toLowerCase())) {
			status.style.color = "green";
			status.innerHTML = "Word '<b style='color:blue;'>" + get_search_word + "</b>' exists in dictionary!";
		} else {
			status.style.color = "red";
			status.innerHTML = "Word not found in dictionary!";
		}
	}
}

function check_for_clean_word(word, status) {
	let is_letter = true;
	for (let i = 0; i < word.length; ++i) {
		if (!(('a' <= word[i] && word[i] <= 'z') || ('A' <= word[i] && word[i] <= 'Z'))) {
			is_letter = false;
			break;
		}
	}
	if (word === "") {
		is_letter = false;
	}
	status.style.color = "red";
	status.innerHTML = "<b>* Please enter a single word that contains only letters!</b><br>";
	return is_letter;
}

function word_exists(word) {
	let found = false;
	for (let element of dictionary) {
		if (element == word) {
			found = true;
			break;
		}
	}
	return found;
}
