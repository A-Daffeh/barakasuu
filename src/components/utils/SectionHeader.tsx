import { Container } from "react-bootstrap";

interface SectionHeaderProps {
  heading: string;
  highlight: string;
  paragraph?: string;
  highlightColor?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  heading,
  highlight,
  paragraph,
  highlightColor = "#D4AF37",
}) => {
  return (
    <Container className="text-center my-5">
      <h2 className="section-header">
        {heading}{" "}
        <span className="section-header-brand" style={{ color: highlightColor }}>
          {highlight}
        </span>
      </h2>
      {paragraph && <p>{paragraph}</p>}
    </Container>
  );
};

export default SectionHeader;
