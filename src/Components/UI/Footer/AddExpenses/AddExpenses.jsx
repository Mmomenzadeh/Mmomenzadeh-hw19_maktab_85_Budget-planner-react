import styled from "@emotion/styled";

const AddExpenses_container = styled.div`
  display: flex;
  gap: 0.3rem;
  flex-direction: column;
  margin-bottom: 0.8rem;
  margin-top: 0.8rem;
`;

const AddExpenses = ({ labelName, type }) => {
  return (
    <AddExpenses_container>
      <label>{labelName}</label>
      <input
        type={type}
        style={{
          width: "300px",
          padding: "0.2rem",
          border: "1px solid rgb(201,201,201) ",
          borderRadius: "0.3rem",
        }}
      />
    </AddExpenses_container>
  );
};

export default AddExpenses;
