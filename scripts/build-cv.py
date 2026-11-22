"""
Builds the downloadable CV (public/cv/Famakinde-Oluwapelumi-CV.pdf).

Edit the content below and re-run. Layout mirrors the original Google Docs CV:
US Letter, 1-inch margins, Arial, bold section headings, bulleted entries with bold lead-ins.

Needs reportlab:  pip install reportlab
Run from the repo root:  python3 scripts/build-cv.py
"""
from reportlab.lib.colors import HexColor, black
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.fonts import addMapping
from reportlab.platypus import ListFlowable, ListItem, Paragraph, SimpleDocTemplate, Spacer, KeepTogether

OUT = "public/cv/Famakinde-Oluwapelumi-CV.pdf"
FONT_DIR = "/System/Library/Fonts/Supplemental"

pdfmetrics.registerFont(TTFont("Arial", f"{FONT_DIR}/Arial.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", f"{FONT_DIR}/Arial Bold.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Italic", f"{FONT_DIR}/Arial Italic.ttf"))
pdfmetrics.registerFont(TTFont("Arial-BoldItalic", f"{FONT_DIR}/Arial Bold Italic.ttf"))
addMapping("Arial", 0, 0, "Arial")
addMapping("Arial", 1, 0, "Arial-Bold")
addMapping("Arial", 0, 1, "Arial-Italic")
addMapping("Arial", 1, 1, "Arial-BoldItalic")

LINK = "#1155cc"
body = ParagraphStyle("body", fontName="Arial", fontSize=11, leading=14.5, textColor=black)
header = ParagraphStyle("header", parent=body)
h1 = ParagraphStyle("h1", fontName="Arial-Bold", fontSize=18, leading=22, spaceBefore=16, spaceAfter=10)
job = ParagraphStyle("job", parent=body, spaceBefore=12, spaceAfter=6)


def link(url, text=None):
    return f'<a href="{url}" color="{LINK}"><u>{text or url}</u></a>'


def bullets(items, level=0):
    """Bulleted list; each item is HTML-ish text, or (text, [sub items])."""
    flow = []
    for item in items:
        if isinstance(item, tuple):
            text, subs = item
            flow.append(ListItem([Paragraph(text, body), bullets(subs, level + 1)]))
        else:
            flow.append(ListItem(Paragraph(item, body)))
    return ListFlowable(
        flow,
        bulletType="bullet",
        start="●" if level == 0 else "○",
        bulletFontName="Arial",
        bulletFontSize=9,
        # Google Docs style: bullet at ~0.3in, text at 0.5in (nested lists one step further in).
        leftIndent=36,
        bulletDedent=14,
        bulletOffsetY=-1,
        spaceBefore=0,
    )


def b(lead, text):
    return f"<b>{lead}</b> {text}"


story = []

# --- Header ---------------------------------------------------------------
story.append(Paragraph(
    '<font size="14"><b><i>FAMAKINDE OLUWAPELUMI ISRAEL</i></b></font> Fullstack Software Engineer | Mobile, '
    "Web Direct call: +90 533849 2580 | Email: famakindeoluwapelumi@gmail.com LinkedIn: "
    f"{link('https://www.linkedin.com/in/oluwapelumi-famakinde-a138ab239/')} | GitHub: "
    f"{link('https://github.com/Famak2003')} WhatsApp: +2347013321569",
    header,
))

# --- Profile --------------------------------------------------------------
story.append(Paragraph("PROFESSIONAL PROFILE", h1))
story.append(Paragraph(
    "Highly analytical Software Engineer with nearly 3 years of experience architecting scalable "
    "fullstack, web, and mobile applications for international production environments. Expert in "
    "React, Next.js, and React Native, backed by a strong foundation in Node.js and NestJS "
    "backend development. Proven track record of delivering cross-platform solutions that work "
    "seamlessly on iOS and Android while ensuring WCAG 2.2 accessibility compliance. "
    "Experienced in managing the full application lifecycle from database design and DevOps "
    "infrastructure to App Store deployment, recently expanding expertise into smart-device "
    "integration, building fault-tolerant systems for real-time facility automation.",
    body,
))

# --- Skills ---------------------------------------------------------------
story.append(Paragraph("CORE SKILLS", h1))
story.append(bullets([
    b("Mobile Development:", "React Native (CLI &amp; Expo), iOS/Android Deployment (App Store "
      "Connect/Google Play Console), Native Android/Kotlin exposure, Mobile Performance "
      "Optimization, Push Notifications, iOS Live Activities."),
    b("Frontend Engineering:", "React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, "
      "Component Architecture, Design Systems."),
    b("Accessibility (EAA &amp; WCAG):", "WCAG 2.2, ARIA, Screen Readers (Voice Over, "
      "TalkBack, NVDA), Accessibility Audits (Axe, Lighthouse)."),
    b("Backend &amp; Integrations:", "Node.js, NestJS, RESTful APIs, WebSockets, "
      "MySQL, Shelly Smart Switch Integration, Cron Jobs, Static IP Networking."),
    b("DevOps &amp; Infrastructure:", "VPS Deployment, Nginx, PM2, Cloudflare (DNS), Git, "
      "Docker, CI/CD Pipelines."),
]))

# --- Experience -----------------------------------------------------------
story.append(Paragraph("PROFESSIONAL EXPERIENCE", h1))

story.append(Paragraph(
    "<b>Full-Stack &amp; Mobile Engineer - NEU- AI, Informatics and Innovation Center (<i>Punica</i>)</b> | "
    "<i>Nicosia, Cyprus | June 2025 - Present</i>", job))
story.append(bullets([
    b("Full Infrastructure &amp; Project Ownership:", "Manage end-to-end development, "
      "deployment, and maintenance of the entire NEU Link ecosystem, encompassing the "
      "React Native mobile apps (iOS/Android), Next.js web application "
      f'(<font name="Courier" color="#188038">link.neu.edu.tr</font>), '
      "Next.js administrative dashboard, NEU Smart Switch system, and all underlying "
      "NestJS backends."),
    b("DevOps &amp; Server Management:", "Deployed and actively manage the production web "
      "environment on a VPS utilizing Nginx as a reverse proxy, PM2 for robust process "
      "management, and Cloudflare for secure DNS routing and performance optimization."),
    b("Smart Transit &amp; Boarding System:", "Engineered a real-time bus tracking system "
      "allowing students to monitor live transit locations and ETA to designated stops, "
      "integrated with a seamless in-app QR code generation module for rapid bus boarding."),
    b("High-Stakes Event &amp; Attendance Tracking:", "Developed a comprehensive event "
      "registration system that accurately logs attendance for both students and staff. "
      "Engineered a multi-layered verification protocol utilizing Geolocation, automated BLE "
      "(Bluetooth Low Energy) hardware detection, and dynamic/static QR code scanning to "
      "ensure secure tracking for events tied to personnel earnings and performance points."),
    b("Interactive Campus Mapping:", "Upgraded the dual-platform mapping architecture (Apple "
      "Maps/Mapbox) to include campus-wide routing, specific building directions, and dynamic "
      "venue capacity indicators for gathering spaces."),
    b("Facility Bookings &amp; Live Activities:", "Enhanced the facility reservation UX by integrating "
      "iOS Live Activities to display real-time slot countdowns directly on the lock screen, while "
      "maintaining robust, equivalent notification experiences for Android users."),
    b("Web Platform Parity:", "Built and deployed a full-featured web iteration of the NEU Link "
      "platform utilizing Next.js, ensuring a seamless 1-to-1 functional parity with the mobile "
      "application."),
    b("Facility Automation (NEU Smart Switch):", "Architected and deployed a standalone "
      "smart-device integration with its own dashboard and dynamic user management (permissions "
      "and roles) to automatically schedule and control lighting in school sports facilities based "
      "on new bookings, using off-the-shelf Shelly smart switches."),
    b("Device Resilience &amp; Subnet Networking:", "Hosted the NEU Smart Switch VPS on "
      "the same subnet as the Shelly smart switches, enabling direct communication via "
      "device-dedicated static IPs and ensuring fault tolerance during backend outages through "
      "a steady cron payload from the NEU server that persists data locally."),
    b("Self-Healing State Recovery:", "Wrote a custom reboot script that runs on the Shelly "
      "switches to automatically ping the NEU Smart Switch server upon power "
      "restoration, validating and reinstating its correct operational state immediately."),
]))

story.append(Paragraph(
    "<b>Fullstack Developer</b> <i>Near East Technology | Nicosia, Cyprus | Dec 2024 - May 2025</i>", job))
story.append(bullets([
    b("Full-Stack Development:", "Architected and maintained production CMS dashboards and "
      "client applications using React, Next.js, TypeScript, NestJS, and MySQL."),
    b("System Optimization:", "Designed frontend architectures that integrated seamlessly with "
      "Node.js/NestJS APIs, significantly improving data consistency and system performance."),
    b("Feature Ownership:", "Took end-to-end ownership of the development lifecycle, from "
      "initial requirement analysis to final deployment, ensuring high-quality delivery."),
    b("Internationalization:", "Implemented multilingual support (English/Turkish) to enable "
      "scalable internationalization for a global user base."),
]))

story.append(Paragraph(
    "<b>Frontend Developer</b> <i>Gunsel | Nicosia, Cyprus | Mar 2024 - Nov 2024</i>", job))
story.append(bullets([
    b("Enterprise Solutions:", "Built and enhanced enterprise HR dashboards and workflows "
      "using React and Next.js for internal organizational use."),
    b("Real-Time Data:", "Integrated REST APIs and backend services to deliver responsive, "
      "data-driven user interfaces with real-time updates."),
    b("UI Refactoring:", "Optimized existing UI components to improve accessibility, mobile "
      "responsiveness, and cross-browser consistency."),
    b("Cross-Team Collaboration:", "Partnered with designers and backend engineers to ensure "
      "high design-to-code fidelity and usability across all devices."),
]))

# --- Projects -------------------------------------------------------------
story.append(Paragraph("SELECTED PROJECTS", h1))
story.append(bullets([
    b("Sizerie (Multi-Tenant E-Commerce SaaS):", "A hybrid marketplace and standalone "
      "storefront generator for artisans, built with React.js and Express.js on a private VPS. "
      "Engineered a highly scalable multi-tenant architecture enabling vendors to handle "
      "complex onboarding including targeted professional category selections and deploy fully "
      "customizable, independent websites with complete checkout flows. Developed a "
      "dynamic variant matrix engine for intricate product cataloging (handling unlimited "
      "combinations of size, color, material, and pre-orders) and integrated a real-time "
      "messaging module featuring deep-linked product tagging. Built a robust configuration "
      "portal with responsive previews, ensuring generated storefronts deliver a flawlessly "
      "optimized web experience across both Android and iOS platforms. Also architected a "
      "custom marketing engine that dynamically generates shareable social media cards to "
      "drive user acquisition."),
    b("NEU Link (University Ecosystem):", "A comprehensive, cross-platform digital ecosystem "
      "(iOS, Android, and Next.js Web) serving as the primary smart campus gateway. "
      "Engineered high-impact features including real-time transit tracking with QR boarding, "
      "interactive capacity-aware mapping, and a highly secure multi-layered event attendance "
      "system utilizing BLE integration and geolocation. Delivered native-feeling experiences "
      "across ecosystems by implementing iOS Live Activities and tailored Android navigation "
      "components."),
    b("NEU Smart Switch Ecosystem:", "A smart-device integration designed "
      "to automate university facility lighting via scheduled cron jobs, ensuring stable offline "
      "functionality and self-healing reboot states using on-device Shelly scripts."),
    b("Punica HR System:", "An enterprise-grade HR platform featuring accessible, multilingual "
      "dashboards. Focused on building secure API integrations and high-performance data "
      "visualization for organizational management."),
]))

# --- Community & education -----------------------------------------------
story.append(KeepTogether([
    Paragraph("COMMUNITY &amp; EDUCATION", h1),
    bullets([
        b("Technical Thought Leadership:", "Share mobile/frontend/backend engineering insights to "
          "a network of 4,156 professionals on LinkedIn."),
        (b("B.Sc. in Software Engineering:", "Near East University | Nicosia, Cyprus | 2021-2024"),
         ["<i>Credential: WES Verified</i>."]),
    ]),
]))

doc = SimpleDocTemplate(
    OUT, pagesize=letter,
    leftMargin=inch, rightMargin=inch, topMargin=inch, bottomMargin=inch,
    title="Famakinde Oluwapelumi Israel - CV", author="Famakinde Oluwapelumi Israel",
)
doc.build(story)
print("wrote", OUT)
