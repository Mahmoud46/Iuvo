let features_pop = document.querySelector(".f-pop"),
	lrn_btns = document.querySelectorAll(".f button"),
	cls_btns = document.querySelectorAll(".pop .cls-btn");

let content = {
	"Mindfulness and Relaxation Exercises":
		"Target anxiety, stress, and depression symptoms, utilizing guided meditations, breathing techniques, and body scans to promote relaxation and mindfulness.",
	"Educational Resources About PTSD":
		"Aim to inform and empower users by providing knowledge about the condition. These resources, often found in high-quality apps, typically include psychoeducational materials covering symptoms, causes, and treatments of PTSD.",
	"Direct Links to Professional Help":
		"To facilitate access to professional care when needed",
	"Symptom Tracking":
		"To monitor progress and tailor the therapeutic approach. which can be beneficial for self-management and for sharing information with healthcare professionals.",
};

lrn_btns.forEach((btn) =>
	btn.addEventListener("click", (e) =>
		ActivateFeaturePopWindow(
			e.target.parentNode.querySelector("img").src,
			e.target.parentNode.querySelector("h3").innerText
		)
	)
);
cls_btns.forEach((btn) =>
	btn.addEventListener("click", (e) =>
		e.target.parentNode.parentNode.classList.remove("active")
	)
);

document
	.querySelector(".sub-btn")
	.addEventListener("click", (_) =>
		document.querySelector(".about_iu").classList.add("active")
	);

document.querySelector(".mail").addEventListener("click", (_) => {
	let link = document.createElement("a");
	link.href =
		"https://github.com/Mahmoud46/Rehabilitation-Engineering-Final-Project/";
	link.click();
});

function ActivateFeaturePopWindow(img_url, f_title) {
	features_pop.querySelector("img").src = img_url;
	features_pop.querySelector("h1").innerText = f_title;
	features_pop.querySelector("p").innerText = content[f_title];

	features_pop.classList.add("active");
}
