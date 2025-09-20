import React, { useState } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"

export default function CourseInterestForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
    type: "",
  })
  const [status, setStatus] = useState({ state: "idle", msg: "" })
  const { t } = useTranslation()

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email) {
      setStatus({ state: "error", msg: "Name and email are required" })
      return
    }

    setStatus({ state: "sending", msg: "Sending..." })

    try {
      const res = await fetch("/api/apps-script", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          ...form,
        }),
      })

      const data = await res.json()

      if (data?.result === "success") {
        setStatus({
          state: "success",
          msg: "Thanks — your interest has been recorded.",
        })
        setForm({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
          type: "",
        })
      } else {
        throw new Error(data?.error || "Unknown server response")
      }
    } catch (err) {
      console.error("Submit error:", err)
      setStatus({
        state: "error",
        msg: "Failed to submit — please try again later.",
      })
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="p-4 shadow rounded bg-white"
      style={{ maxWidth: "680px", margin: "2rem auto" }}
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <h3 className="mb-3" data-aos="fade-down" data-aos-delay="0">
        {t("Registration Form")}
      </h3>

      <div className="mb-3" data-aos="fade-up" data-aos-delay="100">
        <label className="form-label">{t("Full name")}</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={form.name}
          onChange={onChange}
          required
        />
      </div>

      <div className="mb-3" data-aos="fade-up" data-aos-delay="200">
        <label className="form-label">{t("Email")}</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={form.email}
          onChange={onChange}
          required
        />
      </div>

      <div className="mb-3" data-aos="fade-up" data-aos-delay="300">
        <label className="form-label">{t("Phone number")}</label>
        <input
          type="tel"
          name="phone"
          className="form-control"
          value={form.phone}
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">{t("Type")}</label>
        <select
          name="type"
          className="form-select"
          value={form.type}
          onChange={onChange}
        >
          <option value="Online Class">{t("Online Class")}</option>
          <option value="Offline Class">{t("Offline Class")}</option>

          <option value="Other">Other</option>
        </select>
      </div>

      <div className="mb-3" data-aos="fade-up" data-aos-delay="400">
        <label className="form-label">{t("Course")}</label>
        <select
          name="course"
          className="form-select"
          value={form.course}
          onChange={onChange}
        >
          <option value="HSK Exam Preparation Camp">
            {t("HSK Exam Preparation Camp")}
          </option>
          <option value="HSK 1-6">{t("HSK Class")}</option>
          <option value="YCT 1-6">{t("YCT Class")}</option>
          <option value="Happy Chinese Class">{t("Happy Chinese Class")}</option>
          <option value="Chinese Made Easy Class">{t("Chinese Made Easy Class")}</option>
          <option value="School Course Tutoring">{t("School Course Tutoring")}</option>
          <option value="Business Chinese Class">{t("Business Chinese Class")}</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="mb-3" >
        <label className="form-label">{t("Message")}</label>
        <textarea
          name="message"
          className="form-control"
          rows="4"
          value={form.message}
          onChange={onChange}
        ></textarea>
      </div>

      

      <button
        type="submit"
        className="btn btn-primary"
        disabled={status.state === "sending"}
        // data-aos="fade-up"
        // data-aos-delay="500"
      >
        {status.state === "sending" ? "Sending…" : t("Submit")}
      </button>

      {status.state === "success" && (
        <div
          className="alert alert-success mt-3"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {status.msg}
        </div>
      )}
      {status.state === "error" && (
        <div
          className="alert alert-danger mt-3"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {status.msg}
        </div>
      )}
    </form>
  )
}

