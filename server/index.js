import express from "express";
import path from "path";
import ejs from "ejs";
import { fileURLToPath } from "url";
import { siteImages } from "./data/site-images.js";
import { serviceCategories, services, categoryForSlug, servicesInCategory } from "./data/services.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const app = express();
const PORT = process.env.PORT || 3000;

app.engine("html", ejs.renderFile);
app.set("view engine", "html");
app.set("views", path.join(root, "views"));

app.use(express.static(path.join(root, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.locals.siteImages = siteImages;
  res.locals.currentPath = req.path;
  next();
});

function renderPage(res, name, data) {
  return res.render(name, data);
}

app.get("/", (req, res) => {
  res.render("index", {
    metaTitle: "Nangsec Technologies | Cybersecurity Services & Training",
    title: "Home",
    description:
      "Nangsec helps organizations across Africa design, test, and operate security programs—assessments, managed detection, training, and research.",
  });
});

app.get("/services", (req, res) => {
  const categoriesWithServices = serviceCategories.map((cat) => ({
    ...cat,
    items: servicesInCategory(cat.id),
  }));
  res.render("services", {
    title: "Services",
    description: "Strategic security services with defined workflows and deliverables.",
    categoriesWithServices,
  });
});

app.get("/services/:slug", (req, res) => {
  const s = services.find((x) => x.slug === req.params.slug);
  if (!s) return res.status(404).render("404", { title: "Not found" });
  const catId = categoryForSlug(s.slug);
  const cat = serviceCategories.find((c) => c.id === catId);
  res.render("service-detail", {
    title: s.title,
    description: s.summary,
    service: s,
    categoryTitle: cat?.title ?? "Services",
  });
});

app.get("/training", (req, res) => {
  res.render("training", {
    title: "Training",
    description: "Upskill the people who run your controls.",
  });
});

app.get("/research", (req, res) => {
  res.render("research", {
    title: "Research",
    description: "Short-form intelligence from the field.",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    metaTitle: "About | Nangsec Technologies",
    title: "About",
    description: "A practitioner-led firm with hubs across West and East Africa.",
  });
});

app.get("/company", (req, res) => {
  res.redirect(301, "/about");
});

app.get("/resources", (req, res) => {
  res.redirect(301, "/research");
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact",
    description: "Start a conversation with Nangsec.",
    heroEyebrow: "Contact",
    heroTitle: "Start a conversation with Nangsec",
    heroLead:
      "Describe the problem space—upcoming launch, regulatory exam, incident rehearsal, or hiring goals—and we will route you to the right practice lead.",
    sent: req.query.sent === "1",
    error: req.query.err === "1",
  });
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message || String(message).length < 10) {
    return res.redirect("/contact?err=1");
  }
  console.log("Contact message:", { name, email, message });
  res.redirect("/contact?sent=1");
});

app.post("/api/contact", (req, res) => {
  try {
    console.log("Contact message:", req.body);
    res.json({ ok: true });
  } catch {
    res.status(500).json({ ok: false });
  }
});

app.use((req, res) => {
  res.status(404).render("404", { title: "Page not found" });
});

app.listen(PORT, () => {
  console.log(`Nangsec site running at http://localhost:${PORT}`);
});
