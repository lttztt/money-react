import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul{
    display:flex;
    > li{
      width: 33.3333%;
      text-align: center;
      > a {
        padding: 4px 0;
        display:flex;
        flex-direction: column;
        align-items: center;
        > .icon {
          width: 24px;
          height: 24px;
        }
        &.selected {
          color: #f00;
          > .icon {
            fill: #f00;
          }
        }
      }
    }
  }
`;


const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag"/>
            <span>标签页</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            <span>记账页</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart"/>
            <span>统计页</span>
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
