function Button ({ isActive, onClick, children }){
    return (
      <StyledButton isActive={isActive} onClick={onClick}>
        {children}
      </StyledButton>
    );
};

export default Button;