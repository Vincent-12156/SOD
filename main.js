const content = document.getElementById("content");
const pageButtons = document.querySelectorAll("[data-page]");

pageButtons.forEach(btn => {
	btn.addEventListener("click", e => {
		e.preventDefault();

		pageButtons.forEach(b => b.classList.remove("active"));
		btn.classList.add("active");

		const page = btn.dataset.page;

		loadPage(page);
	});
});

loadPage("Home");

function loadPage(page) {
	fetch(`Pages/${page}.html`)
		.then(response => response.text())
		.then(html => {
			content.innerHTML = html;
		})
		.catch(err => {
			content.innerHTML = "<p style='color:red;'>Page not found.</p>";
		});

}
