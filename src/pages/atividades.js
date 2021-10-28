import { graphql } from "gatsby";
import React from "react";
import Container from "react-bootstrap/Container";
import Item from "../components/activities/item";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import PageBanner from "../components/utils/page_banner";
import ActivitiesStyle from "../styles/activities/activities.module.css";

const AtividadesPage = ({ data }) => (
  <Layout darkFooter>
    <SEO title="Speakers" />
    <PageBanner>
      <h1>Atividades</h1>
    </PageBanner>
    <div className={ActivitiesStyle.halfway}>
      <div className={ActivitiesStyle.halfwayOrange} />
      <Item description="Texto descriptivo" />
    </div>
  </Layout>
);

export const pageQuery = graphql`
  query AtividadesQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/talks|workshops/" } }
    ) {
      group(field: frontmatter___day) {
        edges {
          node {
            id
            frontmatter {
              speakers {
                name
                occupations {
                  where
                }
                img {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                linkedin
                website
                twitter
              }
              day
              path
              type
            }
          }
        }
      }
    }
  }
`;

export default AtividadesPage;
