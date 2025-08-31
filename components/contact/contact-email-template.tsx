import * as React from "react";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmailTemplate({
  name,
  email,
  message,
}: ContactEmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            color: "#333333",
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          New Contact Form Message
        </h1>

        <div style={{ marginBottom: "20px" }}>
          <h2
            style={{
              color: "#555555",
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            From: {name}
          </h2>
          <p
            style={{
              color: "#777777",
              fontSize: "16px",
              margin: "0",
            }}
          >
            Email: {email}
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "8px",
            borderLeft: "4px solid #007bff",
          }}
        >
          <h3
            style={{
              color: "#333333",
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Message:
          </h3>
          <p
            style={{
              color: "#555555",
              fontSize: "16px",
              lineHeight: "1.6",
              margin: "0",
              whiteSpace: "pre-wrap",
            }}
          >
            {message}
          </p>
        </div>

        <div
          style={{
            marginTop: "30px",
            paddingTop: "20px",
            borderTop: "1px solid #eeeeee",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#999999",
              fontSize: "14px",
              margin: "0",
            }}
          >
            This message was sent from your website contact form.
          </p>
        </div>
      </div>
    </div>
  );
}
