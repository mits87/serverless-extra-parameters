## Serverless AWS Extra Parameters

## Installation

Install the package with npm: `npm install serverless-extra-parameters`, and add it to your `serverless.yml` plugins list:

```yaml
plugins:
  - serverless-extra-parameters
```

## Usage

```yaml
custom:
  awsShortRegion: ${extra:awsShortRegion}
```
