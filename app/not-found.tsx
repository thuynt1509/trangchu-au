import Link from "next/link";

export default function NotFound() {
  return (
    <body className="error">
      <div className="wrapper-error">
        <div className="error-text">
          <span className="text"></span>
          <Link href="/" className="btn-back">
            Trang chủ
          </Link>
        </div>
        <span className="error-img"></span>
      </div>
    </body>
  );
}
