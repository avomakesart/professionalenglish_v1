import React from "react";

import Highlight from "../../components/Highlight";
import Loading from "../../components/Loading";
import { useAuth0 } from "../../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading />;
  }

  return (
<>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />

          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>


        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
        </>
  );
};

export default Profile;
