function show() {
	const inpu = document.getElementById('task');
	const inputValue = inpu.value.trim();
	const taskList = document.getElementById('taskList');
	if (inputValue) {
		const para = document.createElement('p');
		para.innerText = inputValue;
		para.addEventListener('click', () => para.classList.toggle('completed'));
		taskList.prepend(para);
		inpu.value = '';
	} else {
		alert('Kindly Give the input');
	}
}
