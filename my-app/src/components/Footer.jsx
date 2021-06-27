

var d = new Date();

export default function Footer() {
    return (
        <div>
            <footer>This is a footer copyright {d.getFullYear()}</footer>
        </div>
    )
}