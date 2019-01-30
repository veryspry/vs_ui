import React from "react";

import gql from "graphql-tag";
import { Query } from "react-apollo";

import { Loading, Error, Flex, Box, H3 } from "../../components";

const listSummaries = gql`
  {
    listSummaries {
      items {
        id
        summary
        coffee {
          id
          name
          country
          roaster
          varietal
          processType
        }
        music {
          id
        }
        created
      }
    }
  }
`;

const BlogList = props => {
  return (
    <Query query={listSummaries}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <Error />;
        const {
          listSummaries: { items }
        } = data;
        console.log("data", items);
        return (
          <Flex width="100vw" justifyContent="spaceBetween" alignItems="center">
            {items.map(({ id, summary, coffee }) => {
              return (
                <Flex key={id} alignItems="center">
                  <Flex
                    width={["95vw", "80vw", "400px"]}
                    border="1px solid lightgrey"
                    borderRadius="7px"
                    bg="#fafafa"
                    textAlign="center"
                  >
                    <H3>{summary}</H3>

                    {coffee.map(
                      ({
                        id: coffeeID,
                        name,
                        country,
                        roaster,
                        varietal,
                        processType
                      }) => {
                        return (
                          <Flex key={coffeeID} flexDirection="row">
                            <H3>
                              {country} {name} roasted by: {roaster}{" "}
                            </H3>
                            <H3>varietal: {varietal}</H3>
                            <H3 />
                          </Flex>
                        );
                      }
                    )}
                  </Flex>
                  <Flex
                    my="5px"
                    bg="#fafafa"
                    border="1px solid lightgrey"
                    height="30px"
                    width="0px"
                    borderRadius="7px"
                  />
                </Flex>
              );
            })}
          </Flex>
        );
      }}
    </Query>
  );
};

export default BlogList;
