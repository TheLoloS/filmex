import React, { Component } from "react";

class DownMenuBar extends Component {
  state = {};
  render() {
    return (
      <div className="flex w-full justify-center z-50">
        <ul className="menu menu-horizontal bg-base-300 rounded-box ">
          <li tabindex="0">
            <span>Parent</span>
            <ul class="rounded-box bg-base-300 p-2 ">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li>
                <a>Submenu 3</a>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <span>Parent</span>
            <ul class="rounded-box bg-base-300 p-2 ">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li>
                <a>Submenu 3</a>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <span>Parent</span>
            <ul class="rounded-box bg-base-300 p-2 ">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li>
                <a>Submenu 3</a>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <span>Parent</span>
            <ul class="rounded-box bg-base-300 p-2 ">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li>
                <a>Submenu 3</a>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <span>Parent</span>
            <ul class="rounded-box bg-base-300 p-2 ">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li>
                <a>Submenu 3</a>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <span>Parent</span>
            <ul class="rounded-box bg-base-300 p-2 ">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li>
                <a>Submenu 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default DownMenuBar;
