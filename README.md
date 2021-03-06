# urdx
## Create URDF robot definitions using JSX

This is essentially a templating engine for rendering URDF files using javascript.
This allows:

### Programmatic shape definitions.

Mass and inertia tensor can be automatically
calculated for standard shapes: Box, Cylinder, Sphere. For example:

```jsx
<Cylinder name="base" length={0.1} radius={0.1} />
```

becomes:

```xml
<link name="base_link">
  <visual>
    <geometry>
      <cylinder length="0.1" radius="0.1"/>
    </geometry>
  </visual>
  <collision>
    <geometry>
      <cylinder length="0.1" radius="0.1"/>
    </geometry>
  </collision>
  <inertial>
    <mass value="3.141592654"/>
    <inertia ixx="0.010471976" ixy="0" ixz="0" iyy="0.010471976" iyz="0" izz="0.015707963"/>
  </inertial>
</link>
```

### Hierarchies and inheritance.

Define a joint between a parent and child just by
making the child a syntactic child of the parent. Also allows children to inherit
properties e.g. material of their parent. For example:

```jsx
<Cylinder name="base" length={0.1} radius={0.1} material={{name: 'blue'}}>
  <Box name="child" dx={0.1} dy={0.1} dz={0.1} />
</Cylinder>
```

becomes:

```xml
<link name="base_link">
  <visual>
    <geometry>
      <cylinder length="0.1" radius="0.1"/>
    </geometry>
    <material name="blue"/>
  </visual>
  ...
</link>
<link name="child_link">
  <visual>
    <geometry>
      <box size="0.1 0.1 0.1"/>
    </geometry>
    <material name="blue"/>
  </visual>
  ...
</link>
<joint name="child_joint" type="fixed">
  <parent link="base_link"/>
  <child link="child_link"/>
</joint>
```

### Mixed XML.

Valid XML is valid JSX.  So you can write:

```jsx
<Cylinder name="base" length={0.1} radius={0.1} />
<link name="child_link">
  <visual>
    <geometry>
      <box size="0.1 0.1 0.1"/>
    </geometry>
  </visual>
</link>
<joint name="child_joint" type="fixed">
  <parent link="base_link"/>
  <child link="child_link"/>
</joint>
```

## Get started

Create a new folder and add this as `package.json`:

```javascript
{
  "name": "my-super-robot",
  "version": "1.0.0",
  "description": "My Super Robot Definition",
  "scripts": {
    "build": "babel urdx -d .urdx",
    "postbuild": "node .urdx/index.js"
  },
  "devDependencies": {
    "@babel/cli": "^7.1.0",
    "@babel/core": "^7.1.0",
    "@babel/plugin-transform-react-jsx": "^7.1.0",
    "@babel/preset-env": "^7.1.0"
  },
  "dependencies": {
    "urdx": "latest"
  },
  "babel": {
    "plugins": [["@babel/plugin-transform-react-jsx", {"pragma": "urdx.createElement", "throwIfNamespace": false}]],
    "presets": ["@babel/env"]
  }
}
```

Then run `npm i`. Create directories called `urdx` and `urdf`, and
then add `urdx/index.js`:

```javascript
import urdx, { Cylinder } from 'urdx';

const robot = (
  <Cylinder name="base" length={0.1} radius={0.1} />
)

const files = [
  {
    filename: 'myfirst.urdf',
    args: {
      name: 'myfirst'
    },
    robot,
  },
];

urdx.writeOutput(files);
```

Then run `npm run build`. Voilà! Your robot will show up in the `urdf` folder.

Look in the folder of this project called `urdx` to see some more detailed examples!
