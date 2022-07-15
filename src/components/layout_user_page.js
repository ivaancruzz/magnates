import { Container } from "react-bootstrap";

export default function UserPageLayout({title, icon, children}){
    return(
        <section className="h-100 d-flex flex-column">
            <div className="text-dark d-flex flex-column gap-3 justify-content-center align-items-center p-4">
                {icon}
                <span className="fw-bold">{title}</span>
            </div>

            <div className="pt-5 flex-fill bg-white rounded-bottom rounded-container overflow-auto">
                <Container>
                    {children}
                </Container>
            </div>

        </section>
    )
}