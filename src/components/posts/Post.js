import "./Post.css";
import React from "react";
import { Card ,Avatar } from "antd";
const { Meta } = Card;

function Post() {
  const posts = [
    {
      userId: 1,
      it: 1,
      title: "are or do repels provide blacked out except option criticizes",
      body: "because he also accepts\nundertakes the consequences of refusal and when\nhe criticizes the trouble so that the whole\nof our things are but they are the matter will happen to the architect",
    },
    {
      userId: 1,
      it: 2,
      title: "who is being",
      body: "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of pleasure, or any trouble to reject them; we shall not open to them; we shall not be able to do anything but nothing.",
    },
    {
      userId: 1,
      it: 3,
      title: "she repels troubles as if she were training, whoever she is",
      body: "and just but by what right\nthe lust of every one who chooses to be blinded, or to the\nlust of pains or accusers, who is spared\nhis pains further by his hatred and labor and wants or",
    },
    {
      userId: 1,
      it: 4,
      title: "and he is blinded",
      body: "by rejecting any and often to obtain pleasure\nbut it is easy to assume the fault of things\nwhoever does not know the benefits here is bound by the thing and the pain itself by right\nwhosoever wants the pleasure of things",
    },
    {
      userId: 1,
      it: 5,
      title: "they don't know what they hate",
      body: "Let him seek forgiveness for repudiation, but there are other things, or let him flee, but he is, but there is pleasure, we can all be pleasures; there is no pain, nor is it held",
    },
    {
      userId: 1,
      it: 6,
      title: "I will open them to great pain because",
      body: "to the fact that it is not for us, or that they provide pleasure,",
    },
    {
      userId: 1,
      it: 7,
      title: "but the great easy",
      body: "may it please some with pain that the things of life\nfor the great who are the ones who are whom no one or often\nwill repulse them because\nthey are to follow them but those which",
    },
    {
      userId: 1,
      it: 8,
      title: "pain is pain itself",
      body: "I will open to the most worthy the pain that accepts him\nsome of the easy-minded ones who are able to accept\nthe great elders\nself as comfortable pain of the pleasures of manner or life",
    },
    {
      userId: 1,
      it: 9,
      title:
        "they do not know the right of all the pain of the times and accusers",
      body: "the mind will not know the truth of pain, not because I will come to the fact that it is not for us, or that they provide pleasure, but pleasure",
    },
    {
      userId: 1,
      it: 10,
      title: "the choice of trouble because him",
      body: "however expedient ways with duties or great pains that are to be rejected",
    },
    {
      userId: 2,
      it: 11,
      title: "and indeed because those who praise",
      body: "to the fact that it is not for us, or that they provide pleasure",
    },
    {
      userId: 2,
      it: 12,
      title: "in some times he hates pain",
      body: "to the fact that it is not for us, or that they provide pleasure,",
    },
  ];

  return (
    <div className="post-container">
        <div>
            <h2 style={{textAlign: "center"}}>Assignment No : 03</h2>
        </div>
      <div className="post-card">
        {posts.map((val, idx) => (
          //   <li key={idx}>{val.body}</li>
          <Card className="card" hoverable style={{ width: 300 }}>
            <Avatar
              style={{
                backgroundColor: "#8ecae6",
              }}
            >
              {val.it}
            </Avatar>
            <br />
            <br />
            <Meta title={val.title} description={val.body} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Post;
