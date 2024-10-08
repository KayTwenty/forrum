import { Community } from "@/atoms/communitiesAtom";
import NotFound from "@/components/Community/NotFound";
import { firestore } from "@/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import React from "react";
import safeJsonStringift from "safe-json-stringify";

type CommunityPageProps = {
    communityData: Community;
};

const CommunityPage: React.FC<CommunityPageProps> = ({ communityData }) => {
    if (!communityData) {
        return <NotFound />;
    }
    return <div>Welcome to {communityData.id}</div>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    // Get the community data and pass it to the client
    try {
        const communityDocRef = doc(
            firestore,
            "communities",
            context.query.communityId as string
        );
        const communityDoc = await getDoc(communityDocRef);

        return {
            props: {
              communityData: communityDoc.exists()
                ? JSON.parse(
                    safeJsonStringift({
                      id: communityDoc.id,
                      ...communityDoc.data(),
                    })
                  )
                : "",
            },
          };
    } catch (error) {
        // TODO: add error page
        console.log("Error: getServerSideProps", error);
    }
}

export default CommunityPage;